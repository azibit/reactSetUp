import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
export default (props) => {

  render() {
    return (
      <div className="container">
        <h2 className="center blue-text text-darken-2">Hello, What would you like to Practise?</h2>
        <div className="col s8 m2">
          <div className="z-depth-3 center card-panel teal lighten-2">
            <Link to="/dashboard" activeClassName="active">
              <h3>MULTIPLICATION TABLE</h3>
            </Link>
          </div>
        </div>

        <div className="col s8 m2">
          <div className="z-depth-3 center card-panel teal lighten-2">
            <h3>CLASS EXERCISES</h3>
          </div>
        </div>
      </div>
    )
  }
}
