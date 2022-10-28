import { createSelector } from "reselect";
import { RootState } from "../store";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
 
const selectCategoryReducer = (state: RootState): CategoriesState => state.categories
 
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap =>
        categories.reduce((accu, category) => {
            const { title, items } = category;
            accu[title.toLowerCase()] = items;
            return accu;
        }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)