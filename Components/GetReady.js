import * as React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MAX_SCREEN_HEIGHT, MAX_SCREEN_WIDTH } from "../Constant";
const GetReady = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("PlayGame");
      }}
    >
      <View>
        <ImageBackground
          source={require("../images/bg.png")}
          style={{
            width: MAX_SCREEN_WIDTH,
            height: MAX_SCREEN_HEIGHT,
          }}
        />

        <Image
          style={{
            resizeMode: "stretch",
            position: "absolute",
            left: MAX_SCREEN_WIDTH / 2 - 80,
            top: 150,
          }}
          source={require("../images/flappybird_getready.png")}
        />
        <Image
          style={{
            resizeMode: "stretch",
            position: "absolute",
            left: MAX_SCREEN_WIDTH / 2 - 30,
            top: 250,
          }}
          source={require("../images/bird1.png")}
        />
        <Image
          style={{
            resizeMode: "stretch",
            position: "absolute",
            left: MAX_SCREEN_WIDTH / 2 - 50,
            top: 380,
          }}
          source={require("../images/flappybird-tab.png")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GetReady;
