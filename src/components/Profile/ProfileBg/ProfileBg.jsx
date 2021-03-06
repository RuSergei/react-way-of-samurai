import classes from './ProfileBg.module.css';
import React from 'react';

function ProfileBg() {
  return (
    <div className={classes.images}>
      <img className={classes.img} src='https://pbs.twimg.com/media/DmtCdoIWwAEUnW_.jpg:large'></img>
    </div>
  );
}

export default ProfileBg;