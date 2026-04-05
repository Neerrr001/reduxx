//Redux store only understands the reducer, not the entire slice obj

import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        
    }
})