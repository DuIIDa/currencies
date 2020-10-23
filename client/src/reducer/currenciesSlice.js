import { createSlice } from '@reduxjs/toolkit'

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        data: [],
        dates: [],
        dataTable: [],
        datesTable: [],
    },

    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setDataTable(state, action) {
            state.dataTable = action.payload
        },
        setDates(state, action) {
            state.dates = action.payload
        },
        setDatesTable(state, action) {
            state.datesTable = action.payload
        }
    }
})

export default currenciesSlice.reducer
export const {setData, setDates, setDataTable, setDatesTable} = currenciesSlice.actions