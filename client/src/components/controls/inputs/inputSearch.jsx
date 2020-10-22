import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import {asyncSetData, searchData} from '../../../actions/index'

import {Input} from './indexStyle'

export const Search = () => {
    const dispatch = useDispatch()

    const [searchValue, setSeatchValue] = useState('')
    const [searchTimeout, setsearchTimeout] = useState(false)

    const searchChangeHandler = (e) => {
        setSeatchValue(e.target.value)

        if(searchTimeout !== false){
            clearTimeout(searchTimeout)
        }
        if(e.target.value !== ''){
            setsearchTimeout(setTimeout((value) => {
                dispatch(searchData(value.toUpperCase()))
            }, 1000, e.target.value))
        }else {
            dispatch(asyncSetData())
        }
    }

    return (
        <Input 
            onChange={searchChangeHandler}
            value={searchValue} 
            type='text' 
            placeholder='Currencies...'>
        </Input>
    )
}