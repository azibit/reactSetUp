import React from 'react';
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link} from 'react-router'
import Loader from './Loader.jsx'

var Dashboard = React.createClass({

  forceUpdate(){
    render()
  },

  render() {
    return (
      <div className="center">
        <div className="container row ">
          <br/>
          <div className="col s3"><Loader/></div>
          <div className="col s3"><Loader/></div>
          <div className="col s3"><Loader/></div>
          <div className="col s3"><Loader/></div>

        </div>

        <h4 className="animated bounce">Choos a Multiplication Table to Continue</h4>

        <div className="container row  s4">
          <div className="input-field col s4 offset-s4">
            <select>
              <option value="1">2 * 1 to 2 * 12</option>
              <option value="2">3 * 1 to 3 * 12</option>
              <option value="3">4 * 1 to 4 * 12</option>
              <option value="4">5 * 1 to 5 * 12</option>
              <option value="5">6 * 1 to 6 * 12</option>

            </select>

          </div>
        </div>

        <Link to="/" activeClassName="active" className="waves-effect waves-light btn">
          BACK
        </Link>
        &nbsp;
        <Link to="multiplication_table" activeClassName="active" className="waves-effect waves-light btn">
          CONTINUE
        </Link>

      </div>
    )
  }
})

module.exports = Dashboard;
