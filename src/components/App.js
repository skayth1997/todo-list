import { StrictMode } from 'react';
import { Provider } from "react-redux";
import store from "../store";
import Todos from "./templates/todo";
import '../styles/bootstrap.min.css';
import '../styles/index.scss';
import RootModal from "./modals/RootModal";

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <div id="app">
        <Todos/>
      </div>
      <RootModal/>
    </Provider>
  </StrictMode>
);

export default App;
