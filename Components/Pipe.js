import React from "react";
import { View, Image, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  PIPE_MIN,
  PIPE_WIDTH,
  MAX_SCREEN_HEIGHT,
  FLOOR_HEIGHT,
  GAP_HEIGHT,
} from "../Constant";

const Pipe = ({ x, topHeight }) => {
  return (
    <View style={{ position: "absolute" }}>
      <View
        style={{
          width: PIPE_WIDTH,
          height: topHeight,
          position: "absolute",
          top: 30, //y
          left: x, //x
        }}
      >
        <Image
          style={{
            resizeMode: "stretch",
            height: topHeight,
            width: PIPE_WIDTH,
          }}
          source={require("../images/pipe-top.png")}
        />
      </View>

      <View
        style={{
          width: PIPE_WIDTH,
          height: MAX_SCREEN_HEIGHT - topHeight - GAP_HEIGHT - FLOOR_HEIGHT,
          position: "absolute",
          top: 30 + topHeight + GAP_HEIGHT, //y
          left: x, //x
        }}
      >
        <Image
          style={{
            resizeMode: "stretch",
            transform: [{ rotate: "180deg" }],
            height: MAX_SCREEN_HEIGHT - topHeight - GAP_HEIGHT - FLOOR_HEIGHT,
            width: PIPE_WIDTH,
          }}
          source={require("../images/pipe-top.png")}
        />
      </View>
    </View>
  );
};
export default Pipe;
