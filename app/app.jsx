import React, { Component } from 'react';
import {browserHistory, Router, Route, Link} from 'react-router';

export default (props) => {
  return (
    <div>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">IFTHNK</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="dashboard" activeClassName="active">Multiplication Table</Link>
              </li>
              <li>
                <Link to="class_topics" activeClassName="active">Class Exercises</Link>
              </li>
            </ul>
          </div>
        </nav>
        {props.children}
      </div>
    </div>
  );
}
