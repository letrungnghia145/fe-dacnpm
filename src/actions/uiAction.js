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

export const fetchDataPostDetailsPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_POST_DETAILS_PAGE, pageFilters };
};
export const fetchDataPostPage = () => {
  return { type: UITypes.FETCH_DATA_POST_PAGE, payload: {} };
};

export const fetchDataHomePage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_HOME_PAGE, pageFilters };
};

export const fetchDataProfilePage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_PROFILE_PAGE, pageFilters };
};
