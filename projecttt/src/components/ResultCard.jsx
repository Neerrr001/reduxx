import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='h-56 relative  w-[21vw] mb-2 bg-white rounded'>
      <a href={item.url} className='h-full'target="_blank">
        {item.type == 'photo' ? <img className='h-full w-full object-cover object-center'
        src={item.src} alt="" />:''}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center'
        autoPlay loop muted src={item.src}></video>:''}
        {item.type == 'gif' ? <img className='h-full w-full object-cover object-center'
        src={item.src} alt="" /> :''}
      </a>
      
       <div id='bottom'className=' flex justify-between items-center w-full px-6 py-10 absolute text-white bottom-0'>
        <h2 className='text-lg font-semibold capitalize'>{item.title}</h2>
        <button
         className='px-5 py-2 font-medium cursor-pointer active:scale-95 bg-red-700 text-white rounded'>
          Save
        </button>
       </div>
    </div>
  )
}

export default ResultCard
