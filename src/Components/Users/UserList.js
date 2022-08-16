import React from "react";
import User from './User';
import classes from './UserList.module.css'

const UserList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        <li>
          {props.users.map((user) => {
            return <User key={user.id} details={user} />;
          })}
        </li>
      </ul>
    </div>
  );
};

export default UserList;
