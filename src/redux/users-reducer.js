const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  usersData: [],
  totalUserCounter: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    default:
      return state;
  }
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUserCounter = (totalUserCounter) => ({ type: SET_TOTAL_USERS_COUNT, totalUserCounter });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;