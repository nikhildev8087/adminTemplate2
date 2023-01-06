import { SET_USERS } from "../constant/actionTypes"


export const setUsers = (value) => {
    return {
        type:SET_USERS,
        data:value,
    }
}