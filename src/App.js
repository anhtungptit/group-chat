import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Typography ,FormControl, Input, IconButton } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection("messages")
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => (
        {
          id: doc.id,
          message: doc.data()
        }
        )))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, [])

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const submitHandler = (e) => { 
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  } 

  return (
    <div className="App">
      <img src="https://cdn.iconscout.com/icon/free/png-256/facebook-messenger-2-569346.png" alt="logo"/>
      <Typography variant="h4">Group Chatting App</Typography>
      <h4>Hello {username}</h4>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Type your message..." value={input} onChange={inputHandler} type="text" />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={submitHandler}  children="Send your message">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
