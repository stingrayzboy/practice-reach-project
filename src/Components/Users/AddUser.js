import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import classes from './AddUser.module.css'
const AddUser = (props) => {
  const formHandler = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.username.value,
      age: event.target.userage.value,
    };
    props.addUser(data);
  };

  return (
    <Card className={classes.input} >  
    <form onSubmit={formHandler}>
      <label htmlFor="userName">User Name</label>
      <input type="text" id="username" placeholder="Your Name" />
      <label htmlFor="userAge">User Age</label>
      <input type="number" id="userage" placeholder="Your Age" />
      <Button type="submit"> Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
