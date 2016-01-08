var React = require('react');
var Reflux = require('reflux');

var person = {
  "name" : "Dr. Blaze Hane",
  "age": 30,
  "avatar" : "https://s3.amazonaws.com/uifaces/twitter/picard102/128.jpg"
};

var actions = Reflux.createActions(
  ["updateAge"]
);

var store = Reflux.createStore({
  listenables: [actions],

onUpdateAge(){
  person.age = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  this.trigger({person})
},

  getInitialState(){
    return {person};
  }
});

var App1 = React.createClass({
  mixins: [Reflux.connect(store)],

  render(){
    var p = this.state.person;
    return (
      <div>
        <h2>{p.name}</h2>
          <h2 onClick={actions.updateAge}>{p.age}</h2>
          

        </div>
    )
  }
});

module.exports = App1;
