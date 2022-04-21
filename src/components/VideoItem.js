import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div onClick={()=>onVideoSelect(video)} className='video-item item'> {/*using a callback found in App.js to pass in the video that is clicked */}
      <img alt={video.snippet.title} 
           className='ui image' 
           src={video.snippet.thumbnails.medium.url} />
        <div className='content'>
          <div className='header'>
          {video.snippet.title}                     {/*using the props passed down from VideoList (and App.js by extension) the description and title are extracted */}
          </div>
        </div>
        
    </div>
  )
}

export default VideoItem