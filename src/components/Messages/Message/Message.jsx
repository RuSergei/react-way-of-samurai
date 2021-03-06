import classes from './Message.module.css';
import React from 'react';

function Message(props) {
  return (
    <div>
      <div className={classes.message}>{props.message}</div>
    </div>   
  );
}

export default Message;