import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import React from 'react';

function Nav() {
  return (
    <nav className={classes.nav}>
      <NavLink to='/profile' className={classes.item} activeClassName={classes.active}>Profile</NavLink>
      <NavLink to='/messages' className={classes.item} activeClassName={classes.active}>Messages</NavLink>
      <NavLink to='/users' className={classes.item} activeClassName={classes.active}>Users</NavLink>
      <NavLink to='/news' className={classes.item} activeClassName={classes.active}>News</NavLink>
      <NavLink to='/music' className={classes.item} activeClassName={classes.active}>Music</NavLink>
      <NavLink to='/setting' className={classes.item} activeClassName={classes.active}>Setting</NavLink>
    </nav>
  );
}

export default Nav;