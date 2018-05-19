//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var React = require('react')
var ReactDOM = require('react-dom')

class App extends React.Component {
  render() {
    return (
      <div classname="column">
         <h1>
          asjkdhsakj
          </h1>
      <div id="main" classname="container">
       
          <div >
          <Inside />
          <InboxPane />
          </div>
          
        </div>
    </div>
    );
  }
}
class Inside extends React.Component{
  render(){
    return(
      <div id="inb">
      <h1>
        This is my inbox
      </h1>
      </div>
    );
  }
}
class InboxPane extends React.Component{
  render(){
    return (
      <div id="inbox-pane">
        <h1>
          Inbox
        </h1>
        <table>
          <thead>
            <tr>
              <th>Chat received</th><br/>
              <th>Name</th><br/>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <InboxItem />
          </tbody>
        </table>
      </div>
    );
  }
}
class InboxItem extends React.Component{
  render(){
    return (
      <tr>
        <td>5PM</td><br/>
        <td>Reddy loves Pizza</td><br/>
        <td>confirmed</td>
      </tr>
    );
  }
}
//ReactDOM.render(<App />,document.getElementById("main"))
export default App;
/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/