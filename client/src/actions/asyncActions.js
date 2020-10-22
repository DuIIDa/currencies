import {setData, setDates} from '../reducer/currenciesSlice'
import {NBRB} from '../constants/endpoints'

export const asyncSetData = () => {
    return async dispatch => {
        try {
            const date = new Date();
            
            const secondDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-6);
            let firstDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`

            let responseUSD = await fetch(`${NBRB}/145?startDate=${firstDate}&endDate=${secondDate}`)
            responseUSD = await responseUSD.json()
            let responseEUR = await fetch(`${NBRB}/292?startDate=${firstDate}&endDate=${secondDate}`)
            responseEUR = await responseEUR.json()
            let responseRUR = await fetch(`${NBRB}/298?startDate=${firstDate}&endDate=${secondDate}`)
            responseRUR = await responseRUR.json()

            let data = [...responseUSD, ...responseEUR, ...responseRUR]
            const dates = new Set()
            data.forEach(item => {
                dates.add(item.Date)
            })
            dispatch(setDates([...dates]))
            dispatch(setData(data))
            
        } catch (error) {
            console.log('error: ', error);
        }
    }
}

/*export const searchData = (value) => {
    return async dispatch => {
        try {
            const date = new Date();
            const secondDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-6);
            let firstDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`

            let responseUSD = await fetch(`${NBRB}/145?startDate=${firstDate}&endDate=${secondDate}`)
            responseUSD = await responseUSD.json()
            let responseEUR = await fetch(`${NBRB}/292?startDate=${firstDate}&endDate=${secondDate}`)
            responseEUR = await responseEUR.json()
            let responseRUR = await fetch(`${NBRB}/298?startDate=${firstDate}&endDate=${secondDate}`)
            responseRUR = await responseRUR.json()

            let data = [...responseUSD, ...responseEUR, ...responseRUR]
            

            dispatch(setData(data))
            
        } catch (error) {
            console.log('error: ', error);
        }
    }
}*/
