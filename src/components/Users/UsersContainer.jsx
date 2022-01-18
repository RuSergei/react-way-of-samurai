import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, getUsers, setTotalUserCounter, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
// import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize);

    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items)
    //   this.props.setTotalUserCounter(data.totalCount)
    // })
  }

  onPageChanged = (currentPage) => {

    this.props.getUsers(currentPage, this.props.pageSize);

    // this.props.setCurrentPage(currentPage);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers( data.items)
    // })
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      {this.props.isFetching ? null : <Users
        totalUserCounter={this.props.totalUserCounter}
        pageSize={this.props.pageSize}
        usersData={this.props.usersData}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        // toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />}

    </>
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUserCounter: state.usersPage.totalUserCounter,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, 
  { follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers })(UsersContainer)