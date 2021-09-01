import { all, call, delay, put, take, takeEvery } from "redux-saga/effects";
import { PostActions, TagActions, UIActions, UserActions } from "../actions";
import { PostTypes, TagTypes, UITypes, UserTypes } from "../constants";

export function* uiSaga() {
  yield all([
    watchFetchDataPostDetailsPage(),
    watchFetchDataHomePage(),
    watchFetchDataProfilePage(),
    watchFetchDataPostPage(),
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

function* watchFetchDataPostDetailsPage() {
  yield takeEvery(
    UITypes.FETCH_DATA_POST_DETAILS_PAGE,
    fetchDataPostDetailsPage
  );
}

function* watchFetchDataHomePage() {
  yield takeEvery(UITypes.FETCH_DATA_HOME_PAGE, fetchDataHomePage);
}

function* fetchDataHomePage(action) {
  const { postsFilters, tagsFilters } = action.pageFilters;
  console.log(postsFilters, tagsFilters);
  yield call(showLoading);
  yield delay(500);
  yield all([
    put(PostActions.getAllPosts(postsFilters)),
    put(TagActions.getAllTags(tagsFilters)),
    //sth gone here
  ]);
  yield all([
    take(PostTypes.GET_ALL_POSTS_SUCCESS),
    take(TagTypes.GET_ALL_TAGS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataPostDetailsPage(action) {
  const { id, postsFilters, tagsFilters, postCommentsFilters } = action.pageFilters;
  yield call(showLoading);
  yield delay(500);
  yield all([
    put(PostActions.getPostDetails(id)),
    put(PostActions.getAllPosts(postsFilters)),
    put(PostActions.getPostComments(id, postCommentsFilters)),
    put(TagActions.getAllTags(tagsFilters)),
    //sth gone here
  ]);
  yield all([
    take(PostTypes.GET_POST_DETAILS_SUCCESS),
    take(PostTypes.GET_ALL_POSTS_SUCCESS),
    take(PostTypes.GET_POST_COMMENTS_SUCCESS),
    take(TagTypes.GET_ALL_TAGS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataProfilePage(action) {
  const { id, postedPostsFilters, sharedPostsFilters } = action.pageFilters;
  yield call(showLoading);
  yield delay(500);
  yield all([
    put(UserActions.getUserSharedPosts(id, sharedPostsFilters)),
    put(UserActions.getUserPostedPosts(id, postedPostsFilters)),
    //sth gone here
  ]);
  yield all([
    take(UserTypes.GET_USER_SHARED_POSTS_SUCCESS),
    take(UserTypes.GET_USER_POSTED_POSTS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataPostPage() {
  yield call(showLoading);
  yield delay(500);
  yield all([
    put(TagActions.getAllTags()),
    //sth gone here
  ]);
  yield all([take(TagTypes.GET_ALL_TAGS_SUCCESS)]);
  yield call(hideLoading);
}
