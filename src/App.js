import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import User from "./Components/Users/User";

const SEED_USERS = [
  { name: "Faraz", age: 12, id: Math.random() },
  { name: "Shabana", age: 13, id: Math.random() },
];

const App = () => {
  const [users, setUsers] = useState(SEED_USERS);
  const addUser = (user) => {
    setUsers((prevData) => {
      const updated = [...prevData];
      updated.unshift({ ...user, id: Math.random() });
      return updated;
    });
  };

  return (
    <>
      <AddUser addUser={addUser} />
      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </>
  );
};

export default App;
