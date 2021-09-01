import { all } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { commentSaga } from "./commentSaga";
import { postSaga } from "./postSaga";
import { registerSaga } from "./registerSaga";
import { tagSaga } from "./tagSaga";
import { uiSaga } from "./uiSaga";
import { userSaga } from "./userSaga";

export function* sagas() {
  yield all([
    authSaga(),
    registerSaga(),
    uiSaga(),
    postSaga(),
    tagSaga(),
    userSaga(),
    commentSaga()
  ]);
}
