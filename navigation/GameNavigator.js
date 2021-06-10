import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Game from "../Components/Game";
import GameStart from "../Components/GameStart";
import GetReady from "../Components/GetReady";
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GameStart" component={GameStart} />
      <Stack.Screen name="GetReady" component={GetReady} />
      <Stack.Screen name="PlayGame" component={Game} />
    </Stack.Navigator>
  );
}

export default MyStack;
