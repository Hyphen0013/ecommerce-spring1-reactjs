import {
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE
} from "./ActionType";

import { api, API_BASE_URL } from "../../config/apiConfig";

/**
 * Get item from cart
 * @param {*} reqData
 * @returns
 */
export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });
    try {
        const { data } = await api.get("/api/cart/");
        // console.log("Action: GET - ", data)
        dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
};

/**
 * Add Item to Cart
 * @param {*} reqData
 * @returns
 */
export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
        const { data } = await api.put("/api/cart/add", reqData);
        // console.log("ACTION ADD ---- ", data);
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
};

/**
 * Remove item from cart
 * @param {*} reqData
 * @returns
 */
export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });
    try {
        const { data } = await api.delete(`/api/cart_items/${cartItemId}`);

        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    }
};

/**
 * Update item in Cart
 * @param {*} reqData
 * @returns
 */
export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
        console.log("data: ", reqData)
        const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData);
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    }
};
