import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link} from 'react-router'
import Greetings from './Greetings.jsx'
import Loader from './Loader.jsx'
import MultiplicationTable from './MultiplicationTable.jsx'
import ReactReflux from './ReactReflux.jsx'
import App1 from './app.jsx'
import Dashboard from './Dashboard.jsx'
import Topics from './Topics.jsx'

const App = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">IFTHNK</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="dashboard" activeClassName="active">Multiplication Table</Link>
              </li>
              <li>
                <Link to="class_topics" activeClassName="active">Class Exercises</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children || <App1/>}
      </div>
    )
  }
})


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="class_topics" component={Topics} />
      <Route path="multiplication_table" component={MultiplicationTable}/>
    </Route>
  </Router>
), document.getElementById('example'))
