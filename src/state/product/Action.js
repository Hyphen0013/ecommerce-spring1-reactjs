import {
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_FAILURE,
    FIND_PRODUCT_REQUEST,
    FIND_PRODUCT_SUCCESS,
} from "./ActionType";

import { api, API_BASE_URL } from "../../config/apiConfig";
/**
 * Find Products
 * @param {*} reqData
 * @returns
 */
export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_REQUEST });

    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        stock,
        sort,
        category,
        pageNumber,
        pageSize,
    } = reqData;
    try {
        const { data } = await api.get(
            `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`
        );
        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};

/**
 * Find Product By Id
 * @param {*} reqData
 * @returns
 */
export const findProductById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { productId } = reqData;
    try {
        const { data } = await api.get(`/api/products/id/${productId}`);

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};
