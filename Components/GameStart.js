import * as React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { MAX_SCREEN_HEIGHT, MAX_SCREEN_WIDTH } from "../Constant";
const GameStart = ({ navigation }) => {
  return (
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
        source={require("../images/logo.png")}
      />
      <Image
        style={{
          resizeMode: "stretch",
          position: "absolute",
          left: MAX_SCREEN_WIDTH / 2 - 50,
          top: 250,
        }}
        source={require("../images/bird1.png")}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          left: MAX_SCREEN_WIDTH / 2 - 45,
          top: 350,
        }}
        onPress={() => {
          navigation.navigate("GetReady");
        }}
      >
        <Image
          style={{
            resizeMode: "stretch",
          }}
          source={require("../images/flappybird_play.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GameStart;
