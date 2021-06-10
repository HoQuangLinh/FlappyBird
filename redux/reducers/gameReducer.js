const gameReducer = (state = { status: "getready" }, action) => {
  if (action.type == "START") {
    return { ...state, status: "playing" };
  }
  if (action.type == "GAME_OVER") {
    return { ...state, status: "game-over" };
  }
  return state;
};

export default gameReducer;
