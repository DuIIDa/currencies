import React from 'react'
import {useSelector} from 'react-redux'
import Chart from "react-apexcharts";


import {CURRENCIES} from '../../constants/index'

import { Box } from './chartStyle'

import {Range} from './range/range'
 
export const MyChart = () => {
    const showLoader = useSelector(state => state.loader.showLoader)
    const dates = useSelector(state => state.currencies.datesTable).map((item) => item.slice(0, 10))
    const dataCurr = useSelector(state => state.currencies.dataTable)
    
    const displayData = (array, curr) => {
        return array.filter(item => item.Cur_ID === curr)
            .map(item => item.Cur_OfficialRate)
            
    }

    const dataUSD = displayData(dataCurr, CURRENCIES.USD);
    const dataEUR = displayData(dataCurr, CURRENCIES.EUR);
    const dataRUR = displayData(dataCurr, CURRENCIES.RUR);

    const options = {
        chart: {
            id: "basic-line"
        },
        xaxis: {
            categories: dates
        }
    }
    const series = [
        {
            name: 'USD',
            data: dataUSD
        },

        {
            name: 'EUR',
            data: dataEUR
        },

        {
            name: 'RUR',
            data: dataRUR
        }
    ]
    
    return (
        <Box>
            {
                showLoader ? 
                    <div></div>
                :
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    height="400"
                    width="600">
                </Chart>
            }
            <Range>
            </Range>
        </Box>
    )
}