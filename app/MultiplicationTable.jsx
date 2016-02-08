import React, { Component } from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link} from 'react-router';
import { getTimesTable } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MultiplicationTable extends Component{

  constructor(props){
      super(props);

      this.state = { value: 1, term: '' };
      this.changeState = this.changeState.bind(this);
  }

getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  changeState(event){

      event.preventDefault();
      this.setState({ value: this.getRandomInt(1, 12) });
      this.setState({term: ''});
  }

  onValueChange(event){
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="container center row ">
        <div className="card-panel teal lighten-2">
          <div>
            <h1 className="animated bounce">{this.props.timeTable}</h1>
          </div>
          <div>
            <h1>*</h1>
          </div>
          <div>
            <h1 className="animated bounce">{this.state.value}</h1>
          </div>
        </div>
        <br/>

        <div className="center ">
          <div className="input-field ">
            <input placeholder="Placeholder" type="number"
               value = {this.state.term} onChange = {this.onValueChange}/>
            <label for="answer">Answer</label>
          </div>
          <Link to="dashboard" activeClassName="active">
            <p className="waves-effect waves-light btn">BACK</p>
          </Link>
          &nbsp;
          <a className="waves-effect waves-light btn" onClick={this.changeState}>Submit</a>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ timeTable }){
  return { timeTable };
}

export default connect(mapStateToProps)(MultiplicationTable);
