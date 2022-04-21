import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import UseVidoes from "../hooks/UseVidos";


const App = () => {
   
    const [onVideoSelected,setOnVideoSelected] = useState(null)
    const [videos, search] = UseVidoes('buildings')

    useEffect(()=>{
        setOnVideoSelected(videos[0])
    },[videos])

  return (
     <div 
            className="ui container"
    >
            <SearchBar onTermSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"> {/*use eleven out of the 16 available columns to render the video */}
                        <VideoDetail video={onVideoSelected} /> {/*the video that was clicked on and passed up from the VideoItem component is now passed down via state in this prop */}
                    </div>
                    <div className="five wide column">  {/*use five out of the 16 available columns to render the video */}
                        <VideoList 
                        onVideoSelect={video => setOnVideoSelected(video)} 
                        videos={videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default App