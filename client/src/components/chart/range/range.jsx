import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import 'react-calendar/dist/Calendar.css';

import {asyncSetDataTable} from '../../../actions/index'

import {Box} from './rangeStyle'
 
export const Range = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(7)

    return (
        <Box>
            <div className="label-range">Number of days: {value}</div>
            <input onMouseUp={() => dispatch(asyncSetDataTable(value))} onChange={(e) => setValue(e.target.value)} id="range" type="range" name="range" min="1" max="60" step="1" value={value} />
        </Box>
    )
}