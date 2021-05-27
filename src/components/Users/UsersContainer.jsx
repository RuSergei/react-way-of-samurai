import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUserCounterAC } from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users'

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCounter(response.data.totalCount)
      })
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {



    return <Users totalUserCounter={this.props.totalUserCounter}
      pageSize={this.props.pageSize}
      usersData={this.props.usersData}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      />
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)