import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg'

class Users extends React.Component {

  constructor(props) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div>
        {
          this.props.usersData.map(u =>
            <div className={s.usersCard} key={u.id}>
              <div className={s.left}>
                <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} />
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
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
}

export default Users;