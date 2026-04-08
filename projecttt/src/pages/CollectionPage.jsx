import CollectionCard from "../components/CollectionCard"
import { useDispatch, useSelector } from "react-redux"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {

  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection.items)

  const clear_collection = ()=>{
    dispatch(clearCollection())
  }

  return (
    <div className='overflow-auto px-10 py-5'>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='text-2xl font-medium'>Your Collections</h2>
        <button onClick={()=>{
          clear_collection()
        }}className='px-5 py-2 transition bg-red-700 font-medium cursor-pointer active:scale-95 rounded-xl'>Clear Collection</button>
      </div>
      <div className='flex justify-start w-full flex-wrap gap-5'>
      {collection.map((item, idx)=>{
        return <div key={idx}>
          <CollectionCard item={item} />
        </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPage
