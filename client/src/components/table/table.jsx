import React from 'react';
import {useSelector} from 'react-redux'

import {CURRENCIES} from '../../constants/index'

import {TableContent, TableBlock, TableItem, TableFirstCell} from './tableStyle'

import {Search} from '../controls/inputs/inputSearch'

export const Table = () => {
    const dates = useSelector(state => state.currencies.dates)
    const data = useSelector(state => state.currencies.data)
    
    const dataUSD = data.filter(item => item.Cur_ID === CURRENCIES.USD)
    const dataEUR = data.filter(item => item.Cur_ID === CURRENCIES.EUR)
    const dataRUR = data.filter(item => item.Cur_ID === CURRENCIES.RUR)


    return  (
        <TableContent>

            <Search></Search>

            {data.length ? 
            <TableBlock>
                <TableFirstCell>Currencies\Date</TableFirstCell>
                    {
                        dates.map((item, index) => <TableItem key={index}>{item.slice(0, 10)}</TableItem>)
                    }

                    {dataUSD.length ? <TableFirstCell>USD</TableFirstCell> : null}
                    {
                        dataUSD.map((item,index) => <TableItem key={index}>{item.Cur_OfficialRate}</TableItem>)
                    }
                    {dataEUR.length ? <TableFirstCell>EUR</TableFirstCell> : null}
                    {
                        dataEUR.map((item,index) => <TableItem key={index}>{item.Cur_OfficialRate}</TableItem>)
                    }
                    {dataRUR.length ? <TableFirstCell>RUR</TableFirstCell> : null}
                    {
                        dataRUR.map((item,index) => <TableItem key={index}>{item.Cur_OfficialRate}</TableItem>)
                    }
                </TableBlock>
            :
            <h3>Not found</h3>}
        </TableContent> 
    )
}