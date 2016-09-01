import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { Button, Modal, FormControl } from 'react-bootstrap';
import '../styles/message.css';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state={
      sender: '',
      recipient: '',
      message: ''
    }
  }

handleSender(event) {
  this.setState({sender: event.target.value})
}

handleRecipient(event) {
  this.setState({recipient: event.target.value})
}

handleMessage(event) {
  this.setState({message: event.target.value})
}

handleSend(event) {
  event.preventDefault();
  browserHistory.push('/dashboard');
}

  render() {
    return(
      <div>
        <Modal.Dialog className="messageWrapper static-modal">
        <div className="messageContainer">
          <form className="messageInput" onSubmit={(event) => this.handleSend(event)}>
            <div className="fieldContainer">
              <p className="messageHeading">Green Mail</p>
              <h5>From:</h5><FormControl type="text" placeholder="sender email address"
                onChange={(event) => this.handleSender(event)}/>
              <h5>To:</h5><FormControl type="text" placeholder="recipient email address"
                onChange={(event) => this.handleRecipient(event)}/>
              <h5>Message:</h5><textarea
                onChange={(event) => this.handleMessage(event)}/>
              <Button type="submit" className="sendBtn" bsStyle="success" bsSize="small">send</Button>
            </div>
          </form>
        </div>
        </Modal.Dialog>
      </div>
    );
  }
}


export default Message;
