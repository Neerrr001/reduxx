import {fetchPhotos, fetchVideos, fetchGifs} from './api/mediaApi'
const App = () => {

  return (
    <div className='h-screen w-full bg-gray-900 text-white'>
      <button className='px-4 py-2 m-4 bg-indigo-500 cursor-pointer active:scale-95 rounded' 
      onClick={async ()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results)
      }}>Get photos</button>

      <button className='px-4 py-2 m-4 bg-indigo-500 cursor-pointer active:scale-95 rounded'
      onClick={async ()=>{
        const data = await fetchVideos('cat')
        console.log(data.videos)
      }}>Get Videos</button>
   

    <button className='px-4 py-2 m-4 bg-indigo-500 cursor-pointer active:scale-95 rounded'
      onClick={async ()=>{
        const data = await fetchGifs('cat')
        console.log(data.data.data)
      }}>Get GIFS</button>
    </div>
  )
}

export default App
