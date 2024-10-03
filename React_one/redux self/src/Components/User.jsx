
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../Slices/UserSlice";

const User = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    dispatch(login(username));
    setUsername("");
  };

  return (
    <div>
      <h2>{user ? `Logged in as ${user}` : "Not logged in"}</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default User;
