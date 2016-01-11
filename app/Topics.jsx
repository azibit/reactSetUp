import React from 'react';
import TopicDescriptionWrapper from './TopicDescriptionWrapper.jsx'

var Topics = React.createClass({
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

module.exports = Topics;
