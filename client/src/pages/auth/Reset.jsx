import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleReset = () => {
    // Clear previous messages
    setMessage("");
    setError("");

    // Validate email format (simple regex)
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset email sent! Please check your inbox.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error has occurred: ", errorCode, errorMessage);
        setError("An error occurred: " + errorMessage);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Reset Password</h1>
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
          placeholder="Enter your email"
        />
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Reset;
