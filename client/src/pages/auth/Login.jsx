import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { auth } from "../../configs/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in user: ", user);
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4 w-80">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4 w-80">
        <label className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
        />
      </div>
      <button
        onClick={handleLogin}
        disabled={loading}
        className={`w-80 p-2 ${
          loading ? "bg-gray-400" : "bg-blue-600"
        } text-white rounded-md hover:bg-blue-700 transition duration-200`}
      >
        {loading ? "Logging in..." : "Log In"}
      </button>
    </div>
  );
};

export default Login;
