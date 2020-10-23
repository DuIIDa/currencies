import {setData, setDates, setDataTable, setDatesTable} from '../reducer/currenciesSlice'
import {showLoader, hideLoader} from '../reducer/loaderSlice'
import {NBRB, CURRENCIES} from '../constants/index'

export const asyncSetData = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const date = new Date();
            
            const secondDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-6);
            let firstDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`

            let responseUSD = await fetch(`${NBRB}/${CURRENCIES.USD}?startDate=${firstDate}&endDate=${secondDate}`)
            responseUSD = await responseUSD.json()
            let responseEUR = await fetch(`${NBRB}/${CURRENCIES.EUR}?startDate=${firstDate}&endDate=${secondDate}`)
            responseEUR = await responseEUR.json()
            let responseRUR = await fetch(`${NBRB}/${CURRENCIES.RUR}?startDate=${firstDate}&endDate=${secondDate}`)
            responseRUR = await responseRUR.json()

            let data = [...responseUSD, ...responseEUR, ...responseRUR]
            const dates = new Set()
            data.forEach(item => {
                dates.add(item.Date)
            })

            dispatch(setDatesTable([...dates]))
            dispatch(setDates([...dates]))
            dispatch(setData(data))
            dispatch(setDataTable(data))
            
        } catch (error) {
            console.log('error: ', error);
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export const searchData = (value) => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const date = new Date();
            const secondDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-6);
            let firstDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`

            let responseUSD = []
            let responseEUR = []
            let responseRUR = []

            if('USD'.includes(value)) {
                responseUSD = await fetch(`${NBRB}/145?startDate=${firstDate}&endDate=${secondDate}`)
                responseUSD = await responseUSD.json()
            }
            if('EUR'.includes(value)) {
                responseEUR = await fetch(`${NBRB}/292?startDate=${firstDate}&endDate=${secondDate}`)
                responseEUR = await responseEUR.json()
            }
            if('RUR'.includes(value)) {
                responseRUR = await fetch(`${NBRB}/298?startDate=${firstDate}&endDate=${secondDate}`)
                responseRUR = await responseRUR.json()
            }

            let data = [...responseUSD, ...responseEUR, ...responseRUR]
            
            dispatch(setData(data))
            
        } catch (error) {
            console.log('error: ', error);
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export const asyncSetDataTable = (value) => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const date = new Date();
            
            const secondDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - value);
            let firstDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`

            let responseUSD = await fetch(`${NBRB}/${CURRENCIES.USD}?startDate=${firstDate}&endDate=${secondDate}`)
            responseUSD = await responseUSD.json()
            let responseEUR = await fetch(`${NBRB}/${CURRENCIES.EUR}?startDate=${firstDate}&endDate=${secondDate}`)
            responseEUR = await responseEUR.json()
            let responseRUR = await fetch(`${NBRB}/${CURRENCIES.RUR}?startDate=${firstDate}&endDate=${secondDate}`)
            responseRUR = await responseRUR.json()

            let data = [...responseUSD, ...responseEUR, ...responseRUR]
            const dates = new Set()
            data.forEach(item => {
                dates.add(item.Date)
            })

            dispatch(setDatesTable([...dates]))
            dispatch(setDataTable(data))
            
        } catch (error) {
            console.log('error: ', error);
        }
        finally {
            dispatch(hideLoader())
        }
    }
}