import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { auth } from "../../configs/firebaseConfig";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const { user } = useAuth();

  const validateInput = (email, password) => {
    if (!email || !password) {
      return "Email and password are required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleLogin = () => {
    const errorMessage = validateInput(loginEmail, loginPassword);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log("Signed in user: ", userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log("An error occurred: ", error.code, error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRegister = () => {
    const errorMessage = validateInput(registerEmail, registerPassword);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        console.log("Registered user: ", userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log("An error occurred: ", error.code, error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (user) {
    return <p>You are already logged in.</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          src="/img/minimalist-mountains.jpg"
          alt="Description"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className={`absolute inset-0 bg-purple-800 transition-opacity duration-500 ${
          isLoginMode ? "opacity-20" : "opacity-30"
        }`}
      />

      <div
        className={`flex-1 flex items-center justify-center transition-transform duration-500 ${
          isLoginMode ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={
            "bg-fuchsia-700 opacity-80 text-white p-8 rounded-lg shadow-lg"
          }
        >
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          {error && <p className="text-red-300">{error}</p>}
          <div className="mb-4 w-80">
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-80">
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-80 text-white opacity-100 p-2 ${
              loading ? "bg-gray-400" : "bg-fuchsia-600"
            } rounded-md hover:bg-fuchsia-900 transition duration-200`}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
          <p
            className="mt-4 cursor-pointer"
            onClick={() => setIsLoginMode(false)}
          >
            Don't have an account? Register
          </p>
        </div>
      </div>

      <div
        className={`flex-1 flex items-center justify-center transition-transform duration-500 ${
          isLoginMode ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className={
            "bg-purple-500 opacity-80 text-black p-8 rounded-lg shadow-lg"
          }
        >
          <h1 className="text-2xl font-bold mb-6">Register</h1>
          {error && <p className="text-red-300">{error}</p>}
          <div className="mb-4 w-80">
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="text"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className="mt-1 text-black text-black block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-80">
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={handleRegister}
            disabled={loading}
            className={`w-80 text-black opacity-100 p-2 ${
              loading ? "bg-gray-400" : "bg-purple-600"
            } rounded-md hover:bg-purple-900 transition duration-200`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p
            className="mt-4 cursor-pointer"
            onClick={() => setIsLoginMode(true)}
          >
            Already have an account? Log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
