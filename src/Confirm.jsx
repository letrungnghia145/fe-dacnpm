import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "./actions";

export const Confirm = (props) => {
  const { state } = props.location; 
  const dispatch = useDispatch();
  const [code, changeCode] = useState("");
  const handleChange = (e) => {
    changeCode(e.target.value);
  };
  return (
    <div>
        <input type="text" name="code" value={code} onChange={(e)=>{handleChange(e)}}></input>
        <button onClick={()=>{dispatch(AuthActions.confirmRegisterUser(code))}} >Confirm</button>
        <button onClick={()=>{dispatch(AuthActions.registerUser(state.user, true))}} >Resend code</button>
    </div>
  );
};
