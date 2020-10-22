import React from 'react';
import {useSelector} from 'react-redux'

import {CURRENCIES} from '../../constants/index'

import {TableContent, TableBlock, TableItem, TableFirstCell} from './tableStyle'

import {Search} from '../controls/inputs/inputSearch'
import {Loader} from '../loader/loader'

export const Table = () => {
    const showLoader = useSelector(state => state.loader.showLoader)
    const dates = useSelector(state => state.currencies.dates)
    const data = useSelector(state => state.currencies.data)

    const displayData = (array, curr) => {
        return array.filter(item => item.Cur_ID === curr)
            .map(item => item.Cur_OfficialRate)
            .map((item, index, arr) => {
                if(item === Math.max(...arr)) {
                    return <TableItem className='max' key={index}>{item}</TableItem>
                }
                if(item === Math.min(...arr)) {
                    return <TableItem className='min' key={index}>{item}</TableItem>
                }
                return <TableItem key={index}>{item}</TableItem>
            })
    }

    const dataUSD = displayData(data, CURRENCIES.USD);
    const dataEUR = displayData(data, CURRENCIES.EUR);
    const dataRUR = displayData(data, CURRENCIES.RUR);


    return  (
        <TableContent>

            <Search></Search>

            {
                showLoader ?
                    <Loader></Loader>
                    :
                    data.length ? 
                        <TableBlock>
                            <TableFirstCell>Currencies\Date</TableFirstCell>
                                {
                                    dates.map((item, index) => <TableItem key={index}>{item.slice(0, 10)}</TableItem>)
                                }
            
                                {dataUSD.length ? <TableFirstCell>USD</TableFirstCell> : null}
                                {
                                    dataUSD
                                }
                                {dataEUR.length ? <TableFirstCell>EUR</TableFirstCell> : null}
                                {
                                    dataEUR
                                }
                                {dataRUR.length ? <TableFirstCell>RUR</TableFirstCell> : null}
                                {
                                    dataRUR
                                }
                            </TableBlock>
                        :
                        <h3>Not found</h3>
            }
        </TableContent> 
    )
}