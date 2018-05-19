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
      "selectedConversation":[]
    };
  },
  loadSampleData:function(){
    this.setState(samples);
  },
  setSelectedConversation:function(human_index){
        this.setState({selectedConversation:this.state.humans[human_index].conversations});
  },
  render:function(){
    return (
      <div>
          <div id="header"></div>
          <p>PIZZA ORDER CHAT BOT</p>
          <button onClick={this.loadSampleData}>LOAD DATA</button>
          <div className="container">
              <div className="Column">
                  <InboxPane humans={this.state.humans} setSelectedConversation={this.setSelectedConversation}/>
              </div>
          </div>
          <div className="className">
                  <ConversationPane conversation={this.state.selectedConversation}/>
          </div>
          <div className="className">

          </div>
      </div>
    );
  }
});
var InboxPane = createReactClass({
  renderInboxItem:function(human){
    return <InboxItem key={human} index={human} details={this.props.humans[human]} setSelectedConversation={this.props.setSelectedConversation}/> ;
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
  setSelected:function(){
    this.props.setSelectedConversation(this.props.index);
  },
  render:function(){
    return (
      <tr>
        <td><a onClick={this.setSelected}>{this.messageSummary(this.props.details.conversations)}</a></td>
        <td>{this.props.index}</td>
        <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
      </tr>
    );
  }
});
var Message = createReactClass({
    render:function(){
     return  <p>{this.props.who} said: "{this.props.text}"</p>
    }
});

var ConversationPane = createReactClass({
 
    renderMessage:function(val){
        return <Message who={val.who} text={val.text} key={val.time.getTime()}/>;
    },
    render:function(){
    return(
      <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>Select a Conversation from inbox</h3>
        <div id="messages">
              {this.props.conversation.map(this.renderMessage)}
          </div>
      </div> 
    );
  }
});
export default App;