import {useState} from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex bg-(--c1)  p-8'>
        <input 
        required
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
        className='w-full px-4 py-2 m-4 rounded border-2 outline-none '
        type="text" 
        placeholder='Anything...' />
        <button
        className='px-4 py-2 m-4 rounded border-2 cursor-pointer active:scale-95'
        >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
