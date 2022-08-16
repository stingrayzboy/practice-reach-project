import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // const getAge = (event) => {
  //   setAge(event.target.value);
  // };

  // const getName = (event) => {
  //   setName(event.target.value);
  // };

  const formHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      parseInt(enteredAge.trim()) < 1
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid Input",
      });
      return;
    }
    const data = {
      name: enteredName,
      age: enteredAge,
    };
    props.addUser(data);
    nameRef.current.value = "";
    ageRef.current.value = "";
    // setName("");
    // setAge("");
  };

  const resetModal = () => {
    setError(undefined);
  };

  return (
    <React.Fragment>
      {error ? (
        <Modal title={error.title} message={error.message} reset={resetModal} />
      ) : (
        ""
      )}
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="Your Name"
            ref={nameRef}
          />
          <label htmlFor="userAge">User Age</label>
          <input
            type="number"
            id="userage"
            placeholder="Your Age"
            ref={ageRef}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
