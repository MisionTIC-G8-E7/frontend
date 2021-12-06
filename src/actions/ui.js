import { types } from "../types/types"

export const setError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const removeError = () => {
    return {
        type: types.uiSetError,
    }
}

export const startLoading = () => {
    return {
        types: types.uiStartLoading
    }
}

export const finishLoading = () => {
    return {
        types: types.uiFinishLoading
    }
}