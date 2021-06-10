import { FIRST_PIPE_X, MAX_SCREEN_WIDTH } from "../../Constant";
const initialState = {
  x1: 400,
  x2: 700,
  topHeight1: 300,
  topHeight2: 200,
};
const pipeReducer = function (state = initialState, action) {
  if (action.type == "RUNNING") {
    if (state.x1 < -50) {
      return {
        ...state,
        x1: 400 + 100,
        topHeight1: Math.round(Math.random() * 200 + 40),
      };
    }
    if (state.x2 < -50) {
      return {
        ...state,
        x2: 400 + 100,
        topHeight2: Math.round(Math.random() * 200 + 40),
      };
    }
    return { ...state, x1: state.x1 - 10, x2: state.x2 - 10 };
  }
  if (action.type == "GAME_OVER") {
    return initialState;
  }
  return state;
};
export default pipeReducer;
