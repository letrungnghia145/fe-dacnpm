import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { Accordion } from "./Accordion/Accordion";
import { SideControl } from "./SideControl";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const pageFilters = {
    categoriesFilters: { limit: 5 },
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataAdminCategoriesPage(pageFilters));
  }, []);
  return (
    <>
      <Accordion setSelectedCategory={setSelectedCategory} />
      <SideControl category={selectedCategory} />
    </>
  );
};
