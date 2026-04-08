import { createSlice } from "@reduxjs/toolkit";
import {Slide, ToastContainer,toast} from 'react-toastify'

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection(state,action){
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection(state,action){
            state.items = state.items.filter( //does not modify the org array.Creates a new one
                item => item.id !== action.payload
            )

        },
        clearCollection(state){
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast(){
            toast.success('Added to Collection!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            }); 
        },
        removeToast(){
            toast.error('Removed from Collection', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            }); 
        }



    }
})

export const {addCollection,removeCollection,removeToast, addedToast, clearCollection} = collectionSlice.actions;

export default collectionSlice.reducer