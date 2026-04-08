import CollectionCard from "../components/CollectionCard"
import { useSelector } from "react-redux"

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  return (
    <div className='flex justify-start w-full flex-wrap gap-5 overflow-auto px-10 py-5'>
      {collection.map((item, idx)=>{
        return <div key={idx}>
          <CollectionCard item={item} />
        </div>
      })}
    </div>
  )
}

export default CollectionPage
