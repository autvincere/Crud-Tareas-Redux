import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import AppRouter from "./routers/AppRouter";
import './assets/css/styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default App;
