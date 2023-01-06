import { SET_ORDERS } from "../constant/actionTypes"


export const setOrders = (value) => {
    return {
        type:SET_ORDERS,
        data:value,
    }
}