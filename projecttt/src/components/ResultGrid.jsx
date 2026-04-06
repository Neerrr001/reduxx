import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setResults,
  setError,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        let data;
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item)=>({
            id:item.id,
            type:'photo',
            title:item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.full
          }))
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item)=>({
            id:item.id,
            type:'video',
            title:item.user.name || 'video',
            thumbnail:item.image,
            src:item.url
          }))
        }
        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          data = response.data.map((item)=>({
            id:item.id,
            type:'GIF',
            title:item.title,
            thumbnail:item.images.original.url,
            src:item.url
          }))
        }
         console.log(data);
      }
      getData()
    },[query, activeTab]);

  return (
    <div>
      
    </div>
  );
};

export default ResultGrid;
