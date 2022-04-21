import React from 'react'

const VideoDetail = ({video}) => { //the props have been destructured to just video for better readability
    if (!video){
        return <div>Loading...</div>
    }

    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}` //extracts the id from the video to tack on to the end of the link to render the video from youtube using iframe
  return (
    <div>
        <div className='ui embed'>
            <iframe src={videoSrc} />
        </div>
        <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div>
    </div>
  )
}

export default VideoDetail