import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {
  
  let postElement = props.postData.map (
    (post) => {
      return <Post message={post.message} key={post.id} likesCount={post.likesCount} />
    }
  );

  let onAddPost = () => {
    props.addPost()
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.MyPosts}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} 
                  value={props.newPostText}/>
      </div>
      <div>
        <button onClick={onAddPost}>Send</button>
      </div>

        {postElement}

    </div>
  );
};

export default MyPosts;