import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        {/* <Login /> */}
        <Chat />
      </div>
    </Provider>
  );
};

export default App;
