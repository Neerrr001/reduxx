import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className=' flex justify-between items-center py-5 px-10  bg-(--c2)'>
            <Link to='/' className='text-2xl font-bold'>MediaSearch</Link>

            <div className='flex items-center gap-5'>
                <Link className='bg-(--c4) px-4 py-2 rounded font-medium text-base text-(--c1) active:scale-95 cursor-pointer' to='/'>Search</Link>
                <Link className='bg-(--c4) px-4 py-2 rounded font-medium text-base text-(--c1) active:scale-95 cursor-pointer' to='/collection'>Collection</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
