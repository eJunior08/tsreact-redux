import React from "react";
import RepositoryList from "./components/RepositoryList";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RepositoryList />
    </Provider>
  );
}

export default App;
