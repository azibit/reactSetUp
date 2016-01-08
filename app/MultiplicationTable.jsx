import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link} from 'react-router'

var Reflux = require('reflux');

var person = {
  "name" : "Dr. Blaze Hane",
  "age": 1
};

var actions = Reflux.createActions(
  ["updateAge"]
);

var store = Reflux.createStore({
  listenables: [actions],

onUpdateAge(){
  person.age = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  this.trigger({person})
},

  getInitialState(){
    return {person};
  }
});

var MultiplicationTable = React.createClass({

mixins: [Reflux.connect(store)],

  render() {
    return (
      <div className="container center row ">
        <div className="card-panel teal lighten-2">
          <div>
            <h1 className = "animated bounce">2</h1>
          </div>
          <div>
            <h1>*</h1>
          </div>
          <div>
            <h1 className = "animated bounce">{person.age}</h1>
          </div>
        </div>
        <br/>

        <div className="center ">
          <div className="input-field ">
            <input id="answer" type="number"/>
            <label for="answer">Answer</label>
          </div>
          <Link to="/" activeClassName="active">
            <p className="waves-effect waves-light btn">BACK</p>
            </Link>
            &nbsp;
            <a className="waves-effect waves-light btn"
            onClick={actions.updateAge}>Submit</a>
        </div>
      </div>
    )
  }
});

module.exports = MultiplicationTable;
