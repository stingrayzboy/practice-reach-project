import React from "react";
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
    <form onSubmit={formHandler}>
      <label htmlFor="userName">User Name</label>
      <input type="text" id="username" placeholder="Your Name" />
      <label htmlFor="userAge">User Age</label>
      <input type="number" id="userage" placeholder="Your Name" />
      <button type="submit"> Add User</button>
    </form>
  );
};

export default AddUser;
