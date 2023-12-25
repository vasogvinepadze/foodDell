import { View, Text } from "react-native";
import React from "react";
import MainNavigation from "./navigator/MainNavigation";
import { Provider } from "react-redux";
import { store } from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
