import React from "react";
import { StyleSheet, View } from "react-native";
import Game from "./Components/Game";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyStack from "./navigation/GameNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
