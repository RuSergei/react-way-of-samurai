const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  usersData: [],
  totalUserCounter: 0,
  pageSize: 5,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }

          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }

          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        usersData: [...action.usersData]
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUserCounter: action.totalUserCounter
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUserCounterAC = (totalUserCounter) => ({ type: SET_TOTAL_USERS_COUNT, totalUserCounter });

export default usersReducer;