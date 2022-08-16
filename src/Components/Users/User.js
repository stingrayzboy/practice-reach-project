import React from "react";

const User = (props) => {
  return (
    <p>
      {props.details.name}:{props.details.age}
    </p>
  );
};

export default User;
