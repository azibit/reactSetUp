import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link} from 'react-router'
import TopicDescription from './TopicDescription.jsx'
import Greetings from './Greetings.jsx'
import Loader from './Loader.jsx'
import MultiplicationTable from './MultiplicationTable.jsx'
import ReactReflux from './ReactReflux.jsx'
import App1 from './app.js'

const App = React.createClass({
  render() {
    return (
      <div>

        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">IFTHNK</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/dashboard" activeClassName="active">Multiplication Table</Link>
              </li>
              <li>
                <Link to="/form" activeClassName="active">Class Exercises</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children || <App1/>}
      </div>
    )
  }
})

const TopicDescriptionWrapper = React.createClass({
  render() {
    return <TopicDescription name="Fractions" body="I am a very simple card.
     I am good at containing small bits of
    information. I am convenient because I require little markup to
    use effectively. I am similar to what is called a panel in other
    frameworks."/>
  }
})

const Topics = React.createClass({
  render() {
    return (
      <div className="container row">
        <TopicDescriptionWrapper/>
        <TopicDescriptionWrapper/>
        <TopicDescriptionWrapper/>

      </div>
    )
  }
})

const Dashboard = React.createClass({
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

        <h4 className="animated bounce">Choose a Multiplication Table to Continue</h4>

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


        <Link to="/" activeClassName="active">
          <a className="waves-effect waves-light btn">BACK</a>
          </Link> &nbsp;
        <Link to="multiplication_table" activeClassName="active">
          <a className="waves-effect waves-light btn">CONTINUE</a>
          </Link>
      </div>
    )
  }
})

render(( <Router history = {browserHistory}>
  <Route path="/" component={App}/>
  <Route path="dashboard" component={Dashboard}/>
  <Route path="form" component={Topics}/>
  <Route path="multiplication_table" component={MultiplicationTable}/>
 </Router>
), document.getElementById('example'))
