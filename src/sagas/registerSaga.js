import { push } from "connected-react-router";
import { all, put, takeLatest } from "redux-saga/effects";
import { AuthActions } from "../actions";
import { AuthTypes } from "../constants";
import { authService } from "./../apis";

export function* registerSaga() {
  yield all([watchRegisterUser()]);
}

function* watchRegisterUser() {
  yield takeLatest(AuthTypes.REGISTER_USER, getToken);
}

function* getToken(action) {
  const { user, resend } = action.payload;
  const response = yield authService.register(user);
  if (!resend) {
    yield put(push("/confirm", { user }));
  }
  yield watchConfirmCode(response.data);
}

function* watchConfirmCode(token) {
  yield takeLatest(AuthTypes.CONFIRM_REGISTER_USER, registerUser, token);
}

function* registerUser(token, action) {
  const { code } = action.payload;
  try {
    const response = yield authService.confirmRegister(token, code);
    const { status } = response;
    if (status === 200) {
      yield put(AuthActions.registerUserSuccess());
      yield put(push("/login"));
    }
  } catch (error) {
    yield put(AuthActions.registerUserFailure());
  }
}
