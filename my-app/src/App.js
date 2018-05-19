import './App.css';
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var samples = require('./sample-data');

var App = createReactClass({
  getInitialState:function(){
    return{
      "humans":{},
      "stores":{},
      "selectedconversation":[]
    };
  },
  loadSampleData:function(){
    this.setState(samples);
  },
  render:function(){
    return (
      <div>
          <div id="header"></div>
          <p>PIZZA ORDER CHAT BOT</p>
          <button onClick={this.loadSampleData}>LOAD DATA</button>
          <div className="container">
              <div className="Column">
                  <InboxPane humans={this.state.humans}/>
              </div>
          </div>
          <div className="className">

          </div>
          <div className="className">

          </div>
      </div>
    );
  }
});
var InboxPane = createReactClass({
  renderInboxItem:function(human){
    return <InboxItem key={human} index={human} details={this.props.humans[human]}/> ;
  },
  render : function () {
    return (
        <div id="inbox-pane">
        <h1>INBOX</h1>
        <table>
          <tr>
            <th>CHAT</th>
            <th>NAME</th>
            <th>STATUS</th>
            </tr>
            <tbody>
              {Object.keys(this.props.humans).map(this.renderInboxItem)}
            </tbody>
          </table>
        </div>
    );
  }
});
var InboxItem = createReactClass({
  sortByDate:function(a,b){
      return a.time<b.time ? -1:a.time<b.time ?1:0;
  },
  messageSummary:function(conversations){
    var lastMessage = conversations.sort(this.sortByDate)[0];
    return lastMessage.who + 'said: "'+lastMessage.text+'" @'+lastMessage.time.toDateString();
  },

  render:function(){
    return (
      <tr>
        <td>{this.messageSummary(this.props.details.conversations)}</td>
        <td>{this.props.index}</td>
        <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
      </tr>
    );
  }
});
var ConversationPane = createReactClass({
  render:function(){
    return(
      <div>
        </div> 
    );
  }
});
export default App;