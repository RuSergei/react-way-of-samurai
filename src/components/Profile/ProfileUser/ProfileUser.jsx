import classes from './ProfileUser.module.css';
import React from 'react';

function ProfileUser() {
  return (
    <div className={classes.profileUser}>
      <div className={classes.images}>
        <img className={classes.img} src='https://dogcentr.ru/wp-content/uploads/2019/09/441.jpg'></img>
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>Dmitry K.</h3>
        <span>Date of Birth: 2 january</span>
        <span>City: Minsk</span>
        <span>Education: BSU'11</span>
        <span>Web Site: http://it-kamasutra.com</span>
      </div>
    </div>
  );
}

export default ProfileUser;