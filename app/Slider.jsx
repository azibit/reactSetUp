import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link} from 'react-router'
import Footer from './Footer.jsx'
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
            <div className="center">
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

        <div>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>Divisible by 3 trick</div>
              <div className="collapsible-body container">
                <p>To determine if a number is divisible by 3, add each of the numbers.
                If the sum of each of the numbers is divisible by 3, then the number is divisible by 3.
              Example, 363 is divisible by 3 because 3 + 6 + 3 is 12 and 12 is divisible by 3</p>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">place</i>Prime Number</div>
              <div className="collapsible-body container">
                <p>A Prime Number is a number which has only 2 factors; 1 and itself ONLY</p>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>Third</div>
              <div className="collapsible-body container">
                <p>A little bit of algebra explains this 'magic'.
                  Ask a friend to pick 3 consecutive numbers and to tell you a
                  multiple of 3. Then ask them to add the four numbers and
                  multiply by 67, and to tell you the last two digits of her answer.
                  Now you can really amaze her by giving the whole answer and
                  the three consecutive numbers used at the start..</p>
              </div>
            </li>
          </ul>
        </div>
        <Footer/>
      </div>

    )
  }
}
