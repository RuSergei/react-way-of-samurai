import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import classes from './Messages.module.css';
import React from 'react';

function Messages(props) {
  let dialogElement = props.dialogData.map(
    (dialog) => {
      return <Dialog id={dialog.id} key={dialog.id} dialog={dialog.dialog} />
    }
  );

  let messageElement = props.messageData.map(
    (message) => {
      return <Message message={message.message} key={message.id} />
    }
  );

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };
  

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogs__left}>
        <div className={classes.dialogs__item}>

          {dialogElement}

        </div>
      </div>

      <div className={classes.dialogs__right}>
        <div className={classes.messages__item}>

          {messageElement}

          <div>
            <textarea onChange={onMessageChange} 
                      value={props.newMessageText}/>
          </div>
          <div>
            <button onClick={addMessage}>Нажми</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Messages;