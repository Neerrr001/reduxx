import ResultGrid from "./components/ResultGrid"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"

const App = () => {

  return (
    <div className='h-screen w-full bg-gray-900 text-white'>
      
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}

export default App
