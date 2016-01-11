var React = require('react');
var Reflux = require('reflux');

var person = {
  "name": "Dr. Blaze Hane",
  "age": 30,
  "avatar": "https://s3.amazonaws.com/uifaces/twitter/picard102/128.jpg"
};

var actions = Reflux.createActions(["updateAge"]);

var store = Reflux.createStore({
  listenables: [actions],

  onUpdateAge() {
    person.age = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    this.trigger({person})
  },

  getInitialState() {
    return {person};
  }
});

var App1 = React.createClass({
  mixins: [Reflux.connect(store)],

  render() {
    var p = this.state.person;
    return (
      <div className="center">
        <br/>
        <div className="row">
          <div className="col s6">This div is 6-columns wide</div>
          <div className="col s6">This div is 6-columns wide</div>
        </div>
      </div>
    )
  }
});

module.exports = App1;
