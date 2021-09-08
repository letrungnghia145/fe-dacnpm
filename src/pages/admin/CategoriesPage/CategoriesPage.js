import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import { UIActions } from "../../../actions";
import { Accordion } from "./Accordion/Accordion";
import { CreateCategory } from "./CreateCategory/CreateCategory";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const pageFilters = {
    categoriesFilters: { limit: 5 },
  };
  const match = useRouteMatch();
  useEffect(() => {
    dispatch(UIActions.fetchDataAdminCategoriesPage(pageFilters));
  }, []);
  return (
    <>
      <Accordion />
      <Switch>
          <Route path={`${match.url}/create`}>
            <CreateCategory/>
          </Route>
      </Switch>
    </>
  );
};
