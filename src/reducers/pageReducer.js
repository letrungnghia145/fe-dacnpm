import { PostTypes, TagTypes, UITypes, UserTypes } from "../constants";

const initialState = {
  // isLoading: false,
  data: {},
};

const page = (state = initialState, action) => {
  let data = null;
  switch (action.type) {
    case UITypes.FETCH_DATA_HOME_PAGE:
      return {};
    case UITypes.FETCH_DATA_POST_PAGE:
      return {};
    case UITypes.FETCH_DATA_PROFILE_PAGE:
      return {};
    case UITypes.SHOW_LOADING:
      return { ...state, isLoading: true };
    case UITypes.HIDE_LOADING:
      return { ...state, isLoading: false };
    case PostTypes.GET_POST_DETAILS_SUCCESS:
      data = { ...state.data, post: action.payload.post };
      return { ...state, data };
    case PostTypes.GET_ALL_POSTS_SUCCESS:
      data = { ...state.data, posts: action.payload.posts };
      return { ...state, data };
    case PostTypes.GET_POST_COMMENTS_SUCCESS:
      data = { ...state.data, comments: action.payload.comments };
      return { ...state, data };
    case TagTypes.GET_ALL_TAGS_SUCCESS:
      data = { ...state.data, tags: action.payload.tags };
      return { ...state, data };
    case UserTypes.GET_USER_POSTED_POSTS_SUCCESS:
      data = { ...state.data, postedPosts: action.payload.postedPosts };
      return { ...state, data };
    case UserTypes.GET_USER_SHARED_POSTS_SUCCESS:
      data = { ...state.data, sharedPosts: action.payload.sharedPosts };
      return { ...state, data };
    // case PostTypes.GET_POST_COMMENTS_SUCCESS:
    //   data = { ...state.data, comments: action.payload.comments };
    //   return { ...state, data };
    default:
      break;
  }
  return state;
};

export default page;
