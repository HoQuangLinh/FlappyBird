const initialState = {
  y: 350,
  rotate: 0,
};

const birdReducer = function (state = initialState, action) {
  if (action.type == "FLY") {
    return { ...state, y: state.y - 33, rotate: -20 };
  }
  if (action.type == "FALL") {
    return { ...state, y: state.y + 33, rotate: 0 };
  }
  if (action.type == "GAME_OVER") {
    return {
      y: 350,
      rotate: 0,
    };
  }
  return state;
};
export default birdReducer;
