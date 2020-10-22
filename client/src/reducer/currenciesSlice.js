import { createSlice } from '@reduxjs/toolkit'

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        data: ['111', '222', '333', '444', '555', '666', '777', '888',]
    },

    reducer: {
        getData(state) {
            console.log('Запрос');
        }
    }
})

export default currenciesSlice.reducer
export const {getData} = currenciesSlice.actions