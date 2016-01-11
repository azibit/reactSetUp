import React from 'react';
import TopicDescription from './TopicDescription.jsx'

var TopicDescriptionWrapper = React.createClass({
  render() {
    return <TopicDescription name="Fractions" body="I am a very simple card.
     I am good at containing small bits of
    information. I am convenient because I require little markup to
    use effectively. I am similar to what is called a panel in other
    frameworks."/>
  }
})

module.exports = TopicDescriptionWrapper;
