const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { id: 1, message: 'Hi Sergo', likesCount: 16 },
    { id: 2, message: 'Hau duy du', likesCount: 34 },
    { id: 3, message: 'Hau duy du', likesCount: 5 }
  ],

  newPostText: ''
};

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };

      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default: 
      return state;
  }
};

export const addPostActionCreator = ()  => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT,
      newText: text});

export default profileReducer;