import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import { usersAPI } from '../../api/api';

function Users(props) {

  let pagesCount = Math.ceil(props.totalUserCounter / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagesCountContainer}>
        {pages.map(p => {
          return <span className={props.currentPage === p ? s.selectedPage : s.pageNumber}
            onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>

      {
        props.usersData.map(u =>
          <div className={s.usersCard} key={u.id}>
            <div className={s.left}>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} />
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {

                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    //   withCredentials: true,
                    //   headers: {
                    //     'API-KEY': '702b1871-d30f-4ccc-bead-85cd52841026'
                    //   }
                    // })
                    usersAPI.delUnfollow(u)
                      .then(data => {

                        if (data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                      })

                    // props.unfollow(u.id)

                  }}>unfollow</button>
                  : <button onClick={() => {

                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    //   withCredentials: true,
                    //   headers: {
                    //     'API-KEY': '702b1871-d30f-4ccc-bead-85cd52841026'
                    //   }
                    // })
                    usersAPI.postFollowed(u)
                      .then(data => {

                        if (data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      })

                  }}>follow</button>}
              </div>
            </div>

            <div className={s.right}>
              <div className={s.info}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={s.location}>
                <div>
                  {/* {u.location.country} */}
                </div>
                <div>
                  {/* {u.location.city} */}
                </div>
              </div>
            </div>
          </div>)
      }
    </div>
  )
}

export default Users;