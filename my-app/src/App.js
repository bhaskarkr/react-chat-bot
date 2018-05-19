import './App.css';
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var samples = require('./sample-data');
var App = createReactClass({
  render:function(){
    return (
      <div>
          <div id="header"></div>
          <p>MY NAME IS BHASKAR</p>
          <div className="container">

          </div>
      </div>
    );
  }
});
var IndexPane = createReactClass({
  render:function(){
    return (
        <div id="inbox-pane">
        <h1></h1>
        </div>
    );
  }
});
export default App;