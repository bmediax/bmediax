import React from "react"

const Video = ({ videoSrcURL, videoTitle, videoHeight, ...props }) => {
  return (
    <div className="video">
      <iframe src={`${videoSrcURL}?rel=0`} title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="100%"
        height={videoHeight}
      />
    </div>
  )
}
export default Video