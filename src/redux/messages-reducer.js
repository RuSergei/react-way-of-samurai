const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogData: [
    { id: 1, dialog: 'Sergei' },
    { id: 2, dialog: 'Petro' },
    { id: 3, dialog: 'Ivan' }
  ],

  messageData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hau duy du' },
    { id: 3, message: 'Cool!' }
  ],

  newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText
      };

      return {
        ...state,
        messageData: [ ...state.messageData, newMessage ],
        newMessageText: ''
      };

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      };
    };

    default:
      return state;
  };
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) =>
({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default messagesReducer;