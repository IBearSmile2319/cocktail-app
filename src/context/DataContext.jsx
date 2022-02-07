import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchData } from '../hooks/useFetchData';
import { types } from '../types';


const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const dispatch = useDispatch()
    const { data } = useFetchData("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    // load data
    useEffect(() => {
        dispatch({
            type: types.loadData,
            payload: {
                data,
                cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
                total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0
            }
        })
    }, [dispatch, data])
    // shopping cart

    const addToCart = (e) => {
        dispatch({
            type: types.addCart,
            payload: e,
        })

    }

    const removeToCart = (e) => {
        dispatch({
            type: types.removeCart,
            payload: e
        })

    }



    return <DataContext.Provider
        value={
            {
                data,
                addToCart,
                removeToCart
            }
        }>
        {children}
    </DataContext.Provider>
};


export default DataContext;
