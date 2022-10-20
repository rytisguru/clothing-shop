import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

//import { addCollectionAndDocument } from '../utils/firebase/firebase.utils.js';
//import SHOP_DATA from './../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    // ********************* //
    // Load Data To Database //
    // ********************* //
    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoryMap = await getCategoriesAndDocuments()
           setCategoriesMap(categoryMap);
        }
        getCategoriesMap()
    }, [])

    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}