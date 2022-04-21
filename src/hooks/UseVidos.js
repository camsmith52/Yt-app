import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

//this is a custom hook

const UseVidoes = (defaultSearchTerm) => {
     const [videos, setVideos] = useState([])

      useEffect(()=>{
        search(defaultSearchTerm)
    }, [])

    const search = async term=>{
    const response = await youtube.get('/search',{
        params : {
            q: term
        }
    })
    setVideos(response.data.items)
    
    
}
  return [videos, search] // exporting this into the App.js module
}

export default UseVidoes