import classes from './News.module.css';
import React from 'react';

function News(props) {

  return (
    <div>
      {
        props.newsData.map(u =>
          <div>
            <div>{u.title}</div>
            <div>{u.content}</div> 
            <button onClick={props.addNews}>Клацни</button>
          </div>
        )
      }
    </div>

  )
}

export default News;