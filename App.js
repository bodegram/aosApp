import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigator from "./navigations/navigator";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <Navigator />
      </RootSiblingParent>
    </Provider>
  );
}
