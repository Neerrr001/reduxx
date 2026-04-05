//Redux store only understands the reducer, not the entire slice obj

import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'


export const store = configureStore({
    reducer:{
        search: searchReducer,
    }
})