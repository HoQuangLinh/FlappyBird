import { combineReducers } from "redux";
import gameReducer from "./reducers/gameReducer";
import birdReducer from "./reducers/birdReducer";
import pipeReducer from "./reducers/pipeReducer";
const rootReducer = combineReducers({
  game: gameReducer,
  bird: birdReducer,
  pipe: pipeReducer,
});
export default rootReducer;
