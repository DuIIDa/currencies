import React from 'react';
import {useSelector} from 'react-redux'

import {TableBlock, TableDate} from './tableStyle'

export const Table = () => {
    const data = useSelector(state => state.currencies.data)
    console.log('data: ', data);

    return  (
        <TableBlock>
            {
                data.map((item, index) => <TableDate key={index}>{item}</TableDate>)
            }
        </TableBlock>
    )
}