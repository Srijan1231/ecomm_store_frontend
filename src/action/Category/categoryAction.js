import { setCategory } from "../../redux/categories/categorySlice";
import { getCategory } from "../../util/axiosHelper/axiosHelper";

export const getCategoryAction = () => async (dispatch) => {
  const { status, category } = await getCategory();

  if (status === "success") {
    /// mount data in the store
    dispatch(setCategory(category));
  }
};
