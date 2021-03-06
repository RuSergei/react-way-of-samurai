// import Dialog from './Dialog/Dialog';
// import Message from './Message/Message';
// import classes from './Messages.module.css';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messages-reducer';
// import StoreContext from '../../StoreContext';
import Messages from './Messages';
import { connect } from 'react-redux';

// function MessagesContainer(props) {
//   // let dialogElement = props.messagesPage.dialogData.map(
//   //   (dialog) => {
//   //     return <Dialog id={dialog.id} dialog={dialog.dialog} />
//   //   }
//   // );

//   // let state = props.store.getState();

//   // let messageElement = props.messagesPage.messageData.map(
//   //   (message) => {
//   //     return <Message message={message.message} />
//   //   }
//   // );

//   // let addMessage = () => {
//   //   props.store.dispatch(addMessageActionCreator())
//   // };

//   // let onMessageChange = (text) => {
//   //   // let text = e.target.value;
//   //   props.store.dispatch(updateNewMessageActionCreator(text))
//   // };


//   return (
//     <StoreContext.Consumer>
//       { (store) => {

//         let state = store.getState();

//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator())
//         };

//         let onMessageChange = (text) => {
//           // let text = e.target.value;
//           store.dispatch(updateNewMessageActionCreator(text))
//         };

//         return <Messages addMessage={addMessage}
//           updateNewMessageText={onMessageChange}
//           dialogData={state.messagesPage.dialogData}
//           messageData={state.messagesPage.messageData}
//           newMessageText={state.messagesPage.newMessageText} />
//       }

//       }

//     </StoreContext.Consumer>



//     // <Messages addMessage={addMessage}
//     //           updateNewMessage={onMessageChange}
//     //           dialogData={state.messagesPage.dialogData}
//     //           messageData={state.messagesPage.messageData}
//     //           newMessageText={state.messagesPage.newMessageText}
//     // />

//     //   <div className={classes.dialogs}>

//     //     <div className={classes.dialogs__left}>
//     //       <div className={classes.dialogs__item}>

//     //         {dialogElement}

//     //       </div>
//     //     </div>

//     //     <div className={classes.dialogs__right}>
//     //       <div className={classes.messages__item}>

//     //         {messageElement}

//     //         <div>
//     //           <textarea onChange={onMessageChange} 
//     //                     value={props.messagesPage.newMessageText}/>
//     //         </div>
//     //         <div>
//     //           <button onClick={addMessage}>Нажми</button>
//     //         </div>

//     //       </div>
//     //     </div>
//     //   </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogData: state.messagesPage.dialogData,
    messageData: state.messagesPage.messageData,
    newMessageText: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { 
      let action = addMessageActionCreator();
      dispatch(action);
    },

    updateNewMessageText: (text) => {
      let action = updateNewMessageActionCreator(text);
      dispatch(action);
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;