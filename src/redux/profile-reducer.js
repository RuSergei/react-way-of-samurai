const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postData: [
    { id: 1, message: 'Hi Sergo', likesCount: 16 },
    { id: 2, message: 'Hau duy du', likesCount: 34 },
    { id: 3, message: 'Hau duy du', likesCount: 5 },
  ],

  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        postData: [
          ...state.postData,
          newPost],
        newPostText: ''
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostActionCreator = (text) =>
({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;