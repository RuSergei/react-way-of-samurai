import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)