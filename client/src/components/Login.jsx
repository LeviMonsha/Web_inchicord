import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser(username));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-lg font-bold">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;