import classes from './Post.module.css';
import React from 'react';

function Post(props) {
  return (
    <div>
      <div className={classes.post}>{props.message}</div>
      <span>Like</span> {props.likesCount}
    </div>
  );
}

export default Post;