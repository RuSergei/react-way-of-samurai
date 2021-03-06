import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// function MyPostsContainer(props) {

//   // let postElement = props.postData.map (
//   //   (post) => {
//   //     return <Post message={post.message} likesCount={post.likesCount} />
//   //   }
//   // );

//   // let state = props.store.getState();



//   return (
//     <StoreContext.Consumer>
//       { (store) => {

//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         };

//         let onPostChange = (text) => {
//           // let text = e.target.value;
//           store.dispatch(updateNewPostActionCreator(text))
//         }

//         return <MyPosts addPost={addPost}
//           updateNewPostText={onPostChange}
//           postData={state.profilePage.postData}
//           newPostText={state.profilePage.newPostText} />
//       }


//       }

//     </StoreContext.Consumer>

//     // <div className={classes.MyPosts}>
//     //   <h3>My posts</h3>
//     //   <div>
//     //     <textarea onChange={onPostChange} 
//     //               value={props.newPostText}/>
//     //   </div>
//     //   <div>
//     //     <button onClick={addPost}>Send</button>
//     //   </div>

//     //     {postElement}

//     // </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator()
      dispatch(action);
    },

    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text)
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;