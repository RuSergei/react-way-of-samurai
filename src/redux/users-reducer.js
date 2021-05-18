const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  usersData: [
    
  ],
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map( u => {
          if(u.id === action.userID) {
            return {...u, followed: true}
          }

          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map ( u => {
          if(u.id === action.userID) {
            return {...u, followed: false}
          }

          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData]
      }
    
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (usersData) => ({ type: SET_USERS, usersData });

export default usersReducer;