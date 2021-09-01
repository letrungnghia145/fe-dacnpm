import { PostTypes, TagTypes, UITypes, UserTypes } from "../constants";

const initialState = {
  // isLoading: false,
  // data: {},
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case UITypes.FETCH_DATA_HOME_PAGE:
      return {};
    case UITypes.FETCH_DATA_POST_DETAILS_PAGE:
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
      return {...state, post: action.payload.post};
    case PostTypes.GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.payload.posts };
    case PostTypes.GET_POST_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload.comments };
    case TagTypes.GET_ALL_TAGS_SUCCESS:
      return { ...state, tags: action.payload.tags };
    case UserTypes.GET_USER_POSTED_POSTS_SUCCESS:
      return { ...state, postedPosts: action.payload.postedPosts };
    case UserTypes.GET_USER_SHARED_POSTS_SUCCESS:
      return { ...state, sharedPosts: action.payload.sharedPosts };
    // case PostTypes.GET_POST_COMMENTS_SUCCESS:
    //   data = { ...state.data, comments: action.payload.comments };
    //   return { ...state, data };
    default:
      break;
  }
  return state;
};

export default page;
