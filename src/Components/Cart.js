import React, { createContext, useEffect, useReducer } from 'react'
import './cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from './products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const CartContext = createContext();

const initialState = {
    items: products,
    totalAmount: 0,
    totalItem: 0,
}

export const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id,
        });
    }

    // clear the cart
    const clearCart = () => {
        return dispatch({
            type: 'CLEAR_CART',
        });
    }

    // increment of products in cart
    const increment = (id) => {
        return dispatch({
            type: 'INCREMENT',
            payload: id,
        });
    }

    const decrement = (id) => {
        return dispatch({
            type: 'DECREMENT',
            payload: id,
        });
    }

    // updating total products in cart data
    useEffect(() => {
        dispatch({type: "GET_TOTAL"});
    }, [state.items])

    return (
        <>
            <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
                <ContextCart/> 
            </CartContext.Provider>
        </>
    )
}
