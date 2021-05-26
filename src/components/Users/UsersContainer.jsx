import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUserCounterAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUserCounter: state.usersPage.totalUserCounter,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },

    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData))
    },

    setTotalUserCounter: (totalUserCounter) => {
      dispatch(setTotalUserCounterAC(totalUserCounter))
    },

    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)