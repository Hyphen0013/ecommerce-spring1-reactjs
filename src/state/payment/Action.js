import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_FAILURE,
} from "./ActionType";

import { api } from "../../config/apiConfig";

const token = localStorage.getItem("hyphen_JWT");

/**
 * Add Item to Cart
 * @param {*} reqData
 * @returns
 */
export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        console.log("create payment orderId - ", orderId)
        const { data } = await api.post(`/api/payments/${orderId}`, {});
        console.log("create payment data - ", data)
        
        if(data.id) {
            console.log("href: inside if create payment ", data);
            window.location.href = data.payment_link_url;
        }

        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
};

/**
 * Get Order by order ID
 * @param {*} reqData
 * @returns
 */
export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.get(`/api/payments/?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("Update payment:- ", data);

        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};