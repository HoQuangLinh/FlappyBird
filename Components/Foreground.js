import React from "react";
import { Image, Dimensions, View } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Foreground = () => {
  return (
    <View
      style={{
        width: screenWidth,
        height: 108,
        position: "absolute",
        bottom: 0,
        backgroundColor: "red",
      }}
    >
      <Image
        style={{
          resizeMode: "stretch",
          width: screenWidth,
          height: 108,
        }}
        source={require("../images/fg.png")}
      />
    </View>
  );
};
export default Foreground;
