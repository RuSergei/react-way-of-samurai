import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

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