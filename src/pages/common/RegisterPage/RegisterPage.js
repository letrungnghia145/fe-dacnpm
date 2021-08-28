import React from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../actions";

export const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const random = Math.floor(Math.random() * 100);
  const user = {
    email: `user${random}@gmail.com`,
    password: "1234",
    firstName: `FirstName${random}`, 
    lastName: `LastName${random}`,
    age: random,
  }
  return (
    <div>
      <button onClick={()=>{dispatch(AuthActions.registerUser(user))}} >Register</button>
    </div>
  );
};
