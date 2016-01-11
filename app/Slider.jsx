import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link} from 'react-router'
export default class Slider extends React.Component {

  render() {

    var ulStyle = {}

    return (
      <div className="">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src="http://lorempixel.com/580/250/nature/1"/>
              <div className="caption center-align">
                <h3>Want to Test Your Ability on a Maths Topic!</h3>
                <h5 className="light grey-text text-lighten-3">Here is a place for you.</h5>
              </div>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/2"/>
              <div className="caption left-align">
                <h3>Discover the power of Practise</h3>
                <h5 className="light grey-text text-lighten-3">Practise Now.</h5>
              </div>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/3"/>
              <div className="caption right-align">
                <h3>Master the Multiplication table the African Way</h3>
                <h5 className="light grey-text text-lighten-3">Home is Here.</h5>
              </div>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/4"/>
              <div className="caption center-align">
                <h3 className="light grey-text text-lighten-3">Let Us Take You there!</h3>
                <h5 className="light-text text-darken-2">Get Started.</h5>
              </div>
            </li>
          </ul>
        </div>

        <div id="menu">
          <nav >
            <div className = "center">
              <ul id="nav-mobile" className="brand-logo center">
                <li>
                  <a href="#!">Division</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#!">Addition</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#!">Subtraction</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
