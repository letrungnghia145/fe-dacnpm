import { all, call, put, take, takeEvery } from "redux-saga/effects";
import {
  PostActions,
  TagActions,
  UIActions, UserActions
} from "../actions";
import { PostTypes, TagTypes, UITypes, UserTypes } from "../constants";

export function* uiSaga() {
  yield all([
    watchFetchDataPostPage(),
    watchFetchDataHomePage(),
    watchFetchDataProfilePage(),
  ]);
}

function* showLoading() {
  yield put(UIActions.showLoading());
}

function* hideLoading() {
  yield put(UIActions.hideLoading());
}

function* watchFetchDataProfilePage() {
  yield takeEvery(UITypes.FETCH_DATA_PROFILE_PAGE, fetchDataProfilePage);
}

function* watchFetchDataPostPage() {
  yield takeEvery(UITypes.FETCH_DATA_POST_PAGE, fetchDataPostPage);
}

function* watchFetchDataHomePage() {
  yield takeEvery(UITypes.FETCH_DATA_HOME_PAGE, fetchDataHomePage);
}

function* fetchDataHomePage(action) {
  yield call(showLoading);
  yield all([
    put(PostActions.getAllPosts({})),
    put(TagActions.getAllTags({})),
    //sth gone here
  ]);
  yield all([
    take(PostTypes.GET_ALL_POSTS_SUCCESS),
    take(TagTypes.GET_ALL_TAGS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataPostPage(action) {
  const { id } = action.payload;
  yield call(showLoading);
  yield all([
    put(PostActions.getPostDetails(id)),
    put(PostActions.getAllPosts({})),
    put(PostActions.getPostComments(id, {})),
    //sth gone here
  ]);
  yield all([
    take(PostTypes.GET_POST_DETAILS_SUCCESS),
    take(PostTypes.GET_ALL_POSTS_SUCCESS),
    take(PostTypes.GET_POST_COMMENTS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataProfilePage(action) {
  const { id } = action.payload;
  yield call(showLoading);
  yield all([
    put(UserActions.getUserSharedPosts(id, {})),
    put(UserActions.getUserPostedPosts(id, {})),
    //sth gone here
  ]);
  yield all([
    take(UserTypes.GET_USER_SHARED_POSTS_SUCCESS),
    take(UserTypes.GET_USER_POSTED_POSTS_SUCCESS),
  ]);
  yield call(hideLoading);
}
