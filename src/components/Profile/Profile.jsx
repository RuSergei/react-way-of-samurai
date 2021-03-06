import classes from './Profile.module.css';
import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileUser from './ProfileUser/ProfileUser';
import ProfileBg from './ProfileBg/ProfileBg';

function Profile() {

  return (
    <div className={classes.profile}>
      <ProfileBg />
      <ProfileUser />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;