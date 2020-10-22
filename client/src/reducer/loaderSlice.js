import { createSlice } from '@reduxjs/toolkit'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        showLoader: false
    },

    reducers: {
        showLoader(state) {
            state.showLoader = true
        },
        hideLoader(state) {
            state.showLoader = false
        }
    }
})

export default loaderSlice.reducer
export const {hideLoader, showLoader} = loaderSlice.actions