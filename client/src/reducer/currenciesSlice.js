import { createSlice } from '@reduxjs/toolkit'

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        data: [],
        dates: []
    },

    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setDates(state, action) {
            state.dates = action.payload
        }
    }
})

export default currenciesSlice.reducer
export const {setData, setDates} = currenciesSlice.actions