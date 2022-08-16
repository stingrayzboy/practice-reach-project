import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

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
      <div>
        <AddUser addUser={addUser} />
        <UserList users={users} />
      </div>
    </>
  );
};

export default App;
