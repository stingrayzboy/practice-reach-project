import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const getAge = (event) => {
    setAge(event.target.value);
  };

  const getName = (event) => {
    setName(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      age.trim().length === 0 ||
      parseInt(age.trim()) < 1
    ) {
      setError({
        title: 'Invalid Input',
        message: "Please Enter a valid Input"
      })
      return;
    }
    const data = {
      name: name,
      age: age,
    };
    props.addUser(data);
    setName("");
    setAge("");
  };

  const resetModal = () => {
    setError(undefined)
  }

  return (
    <React.Fragment>
      {error ? <Modal title={error.title} message={error.message} reset={resetModal}/> : ''}      
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="Your Name"
            value={name}
            onChange={getName}
          />
          <label htmlFor="userAge">User Age</label>
          <input
            type="number"
            id="userage"
            placeholder="Your Age"
            value={age}
            onChange={getAge}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
