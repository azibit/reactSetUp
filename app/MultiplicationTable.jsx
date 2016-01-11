import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link} from 'react-router'
import ReactModal from './ReactModal.jsx'

var Reflux = require('reflux');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');


var person = {
  "name": "Dr. Blaze Hane",
  "age": 1
};

var value = undefined;
var actions = Reflux.createActions(["updateAge"]);

var store = Reflux.createStore({
  listenables: [actions],

  onUpdateAge() {
    console.log("Value is: " + value);

    if((2 * person.age) == value){
      console.log("Right Answer...");

    }else{
      console.log("Person.age: " + person.age);
      console.log("Value: " + value);
      console.log("Wrong Answer");
    }


    person.age = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    value = undefined;
    this.trigger({person, value});
  },

  getInitialState() {
    return {person, value: undefined, modalIsOpen: false};
  },

  openModal() {
    this.setState({modalIsOpen: true});
  },

  closeModal() {
    this.setState({modalIsOpen: false});
  }
});

var MultiplicationTable = React.createClass({

  mixins: [Reflux.connect(store)],
  handleChange(event) {
    this.setState({value: event.target.value});
  },

  componentDidMount(){
      ReactDOM.findDOMNode(this.refs.nameInput).focus();
    },

  render() {
   value = this.state.value;

    return (
      <div className="container center row ">
        <div className="card-panel teal lighten-2">
          <div>
            <h1 className="animated bounce">2</h1>
          </div>
          <div>
            <h1>*</h1>
          </div>
          <div>
            <h1 className="animated bounce">{person.age}</h1>
          </div>
        </div>
        <br/>

        <div className="center ">
          <div className="input-field ">
            <input placeholder="Placeholder" type="number"
              value={value} onChange={this.handleChange} ref="nameInput"/>
            <label for="answer">Answer</label>
          </div>
          <Link to="/" activeClassName="active">
            <p className="waves-effect waves-light btn">BACK</p>
          </Link>
          &nbsp;
          <a className="waves-effect waves-light btn" onClick={actions.updateAge}>Submit</a>
        </div>


      </div>
    )
  }
});

module.exports = MultiplicationTable;
