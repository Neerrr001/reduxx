import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import {ToastContainer, toast } from 'react-toastify'
import CollectionPage from "./pages/CollectionPage"

const App = () => {

  return (
    <div className='min-h-screen w-full bg-gray-900 text-white'>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
      
    </div>
  )
}

export default App
