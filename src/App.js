import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./components/Layout";
import Tareas from "./components/Tareas";
import './assets/css/styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Tareas />
      </Layout>
    </Provider>
  );
};
export default App;
