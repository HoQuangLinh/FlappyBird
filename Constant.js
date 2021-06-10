import { Dimensions } from "react-native";

const Constants = {
  MAX_SCREEN_WIDTH: Dimensions.get("screen").width,
  MAX_SCREEN_HEIGHT: Dimensions.get("screen").height,
  PIPE_MIN: 200,
  PIPE_WIDTH: 52,

  //Toạ độ x của ống đầu tiên
  FIRST_PIPE_X: 300,
  //Toạ độ X (cô định ) của chim
  BIRD_X: 100,
  BIRD_WIDTH: 38,
  BIRD_HEIGHT: 26,
  FLOOR_HEIGHT: 108,
  FLOOR_WIDTH: Dimensions.get("screen").width,

  //Khoảng cách giữa hai ống đối diện
  GAP_HEIGHT: 140,
};

export const {
  MAX_SCREEN_WIDTH,
  MAX_SCREEN_HEIGHT,
  PIPE_MIN,
  PIPE_WIDTH,
  BIRD_X,
  BIRD_HEIGHT,
  BIRD_WIDTH,
  FLOOR_HEIGHT,
  FLOOR_WIDTH,
  GAP_HEIGHT,
  FIRST_PIPE_X,
} = Constants;
