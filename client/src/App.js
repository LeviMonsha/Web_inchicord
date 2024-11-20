import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import store from "./redux/store";
import Login from "./components/Login";
import Chat from "./components/Chat";

const App = () => {
  const isAuthenticated = Boolean(store.getState().user); // Check if user is authenticated

  return (
    <Provider store={store}>
      <Router>
        <div className="container mx-auto">
          <Routes>
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/chat" /> : <Login />}
            />
            <Route
              path="/chat"
              element={isAuthenticated ? <Chat /> : <Navigate to="/login" />}
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
