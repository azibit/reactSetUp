import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MultiplicationTable from './MultiplicationTable.jsx'
import App from './app';
import Dashboard from './Dashboard.jsx';
import Topics from './Topics.jsx';
import Slider from './Slider.jsx';


export default(
  <Route path="/" component={ App } >
    <IndexRoute component = {Slider} />
    <Route path="class_topics" component={Topics} />
    <Route path="multiplication_table" component={MultiplicationTable}/>
    <Route path="dashboard" component={Dashboard}/>

  </Route>
);
