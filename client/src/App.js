import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Home from "./pages/HomePage";
// import Secret from "./pages/protected/Secret";
// import ProtectedRoute from "./components/routes/ProtectedRoute";
import Navbar from "./components/Navbar";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";

function App() {
  initializeApp(firebaseConfig);
  return (
    <Router>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          {/* <Route element={<ProtectedRoute />}>
          <Route path="/protected" element={<Secret />} />
        </Route> */}

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
