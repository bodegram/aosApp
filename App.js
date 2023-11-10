import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Navigator from "./navigations/navigator";
import { RootSiblingParent } from "react-native-root-siblings";
import { PersistGate } from "redux-persist/integration/react";
import { registerRootComponent } from "expo";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootSiblingParent>
          <Navigator />
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(App)