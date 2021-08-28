import { connectRouter } from "connected-react-router";
import auth from "./authReducer";
import page from "./pageReducer";

const { combineReducers } = require("redux");

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    page,
  });

export default reducers;
