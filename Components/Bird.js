import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, View } from "react-native";
import { BIRD_WIDTH, BIRD_HEIGHT, BIRD_X } from "../Constant";
const Bird = () => {
  const bird = useSelector(({ bird }) => bird);
  //Khi chạm vào màn hình, đầu con chim sẽ nghiên lên 20 độ
  const rotate = bird.rotate;

  //Lấy toạ độ y của chim bay
  const y = bird.y;

  return (
    <View
      style={{
        position: "absolute",
        top: y,
        left: BIRD_X,
        width: BIRD_WIDTH,
        height: BIRD_HEIGHT,
        transform: [{ rotate: `${rotate}deg` }],
      }}
    >
      <Image
        style={{ width: BIRD_WIDTH, height: BIRD_HEIGHT }}
        source={require("../images/bird1.png")}
      />
    </View>
  );
};
export default Bird;
