import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";


// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {

    profilePage: {
      postData: [
        { id: 1, message: 'Hi Sergo', likesCount: 16 },
        { id: 2, message: 'Hau duy du', likesCount: 34 },
        { id: 3, message: 'Hau duy du', likesCount: 5 }
      ],

      newPostText: ''
    },

    messagesPage: {
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
    },
  },
  
  _callSubscriber() {
    console.log('');
  },

  getState() {
    return this._state;
  },

  dispatch(action) {

    this.getState().profilePage = profileReducer(this.getState().profilePage, action);
    this.getState().messagesPage = messagesReducer(this.getState().messagesPage, action);
    
    this._callSubscriber(store);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store;