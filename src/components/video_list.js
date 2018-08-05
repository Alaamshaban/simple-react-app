import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = function({ videos,onVideoSelect }) {
  return (
    <ul className="col-md-4 col-sm-4 list-group">
      {videos.map(video => {
        return (
            <VideoListItem 
            key={video.etag} 
            video={video}
            onVideoSelect={onVideoSelect}  />
        )
       
      })}
    </ul>
  );
};

export default VideoList;
