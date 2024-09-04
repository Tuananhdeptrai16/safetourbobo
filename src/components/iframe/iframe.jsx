import React from "react";

export const MyVideo = () => {
  return (
    <div className="video">
      <video
        autoPlay
        controls
        loop
        src={`${process.env.PUBLIC_URL}/video/vietnam.mp4`}
      ></video>
    </div>
  );
};
