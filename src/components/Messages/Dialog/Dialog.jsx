import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';
import React from 'react';

function Dialog(props) {
  return (
    <div className={classes.dialog}>
      <div className={classes.images}>
        <img className={classes.img} src='https://dogcentr.ru/wp-content/uploads/2019/09/441.jpg'></img>
      </div>
      <NavLink to={'/messages/' + props.id} className={classes.dialog__link} activeClassName={classes.active}>{props.dialog}</NavLink>
    </div>
  );
}

export default Dialog;