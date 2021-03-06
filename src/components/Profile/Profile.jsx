import classes from './Profile.module.css';
import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileUser from './ProfileUser/ProfileUser';
import ProfileBg from './ProfileBg/ProfileBg';

function Profile(props) {

  return (
    <div className={classes.profile}>
      <ProfileBg />
      <ProfileUser />
      <MyPostsContainer
      // store={props.store}
      //  postData={props.store.getState().profilePage.postData}
      //  newPostText={props.store.getState().profilePage.newPostText}
      //  dispatch={props.dispatch} 
      />
    </div>
  );
}

export default Profile;