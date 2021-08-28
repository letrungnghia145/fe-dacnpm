import { UITypes } from "../constants";

export const showLoading = () => {
  return {
    type: UITypes.SHOW_LOADING,
  };
};
export const hideLoading = () => {
  return {
    type: UITypes.HIDE_LOADING,
  };
};

export const fetchDataPostPage = (id) => {
  return { type: UITypes.FETCH_DATA_POST_PAGE, payload: { id } };
};

export const fetchDataHomePage = () => {
  return { type: UITypes.FETCH_DATA_HOME_PAGE, payload: {} };
};

export const fetchDataProfilePage = (id) => {
  return { type: UITypes.FETCH_DATA_PROFILE_PAGE, payload: { id } };
};
