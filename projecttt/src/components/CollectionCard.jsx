import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({item}) => {

  const dispatch = useDispatch()

  const removeFromCollection = (item)=>{
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }

  return (
    <div className="h-56 relative  w-[21vw] mb-2 bg-white rounded-xl overflow-hidden">
      <a href={item.url} className="h-full" target="_blank">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className=" flex justify-between items-center gap-2 w-full px-6 py-6 absolute text-white bottom-0"
      >
        <h2 className="text-lg font-semibold h-14 overflow-hidden capitalize">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item)
          }}
          className="px-4 py-2 font-medium cursor-pointer active:scale-95 bg-red-700 text-white rounded-xl"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
