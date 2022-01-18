import classes from './ProfileUser.module.css';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/img/user.jpg'

function ProfileUser(props) {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profileUser}>
      <div className={classes.images}>
        <img className={classes.img} src={ props.profile.photos.small != null ? props.profile.photos.small : userPhoto}></img>
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>{props.profile.fullName}</h3>
        <span>Обо мне: {props.profile.aboutMe}</span>
        <span>City: Minsk</span>
        <span>Education: BSU'11</span>
        <span>VK: {props.profile.contacts.vk}</span>
        <span>Status: {props.profile.status}</span>
      </div>
    </div>
  );
}

export default ProfileUser;