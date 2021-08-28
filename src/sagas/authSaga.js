import { push } from "connected-react-router";
import { all, put, takeEvery } from "redux-saga/effects";
import { AuthActions } from "../actions";
import { authService } from "../apis";
import { AuthTypes, TOKEN_KEY } from "../constants";

export function* authSaga() {
  yield all([watchAuthenticateUser(), watchAuthorizeUser(), watchLogoutUser()]);
}

function* watchAuthenticateUser() {
  yield takeEvery(AuthTypes.AUTHENTICATE_USER, authenticateUser);
}
function* watchAuthorizeUser() {
  yield takeEvery(AuthTypes.AUTHORIZE_USER, authorizeUser);
}
function* watchLogoutUser() {
  yield takeEvery(AuthTypes.LOGOUT_USER, logoutUser);
}

function* logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
  yield put(push("/login"));
}

function* authenticateUser(action) {
  const { email, password } = action.payload;
  try {
    const response = yield authService.authenticate(email, password);
    const { data, status } = response;
    if (status === 200) {
      localStorage.setItem(TOKEN_KEY, data.token);
      yield put(AuthActions.authorizeUserSuccess(data.user));
    }
  } catch (error) {
    localStorage.removeItem(TOKEN_KEY);
    yield put(push("/login"))
    yield put(AuthActions.authorizeUserFailure(error));
  }
}

function* authorizeUser() {
  try {
    const response = yield authService.authorize();
    const { status, data } = response;
    if (status === 200) {
      yield put(AuthActions.authorizeUserSuccess(data));
    } else {
      throw new Error();
    }
  } catch (error) {
    localStorage.removeItem(TOKEN_KEY);
    yield put(push("/login"))
    yield put(AuthActions.authorizeUserFailure(error));
  }
}
