import { FC, useEffect, useRef, useState } from 'react';
import videojs, { VideoJsPlayer } from 'video.js';
import "videojs-contrib-hls";
import "video.js/dist/video-js.css";

type VideoJSProps = {
  options?: videojs.PlayerOptions
  onReady?: Function
}

export const VideoJS: FC<VideoJSProps> = ( props ) => {

  const videoRef = useRef(null);
  const playerRef = useRef<VideoJsPlayer>();
  const { options, onReady } = props;

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      });
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = undefined;
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} className="video-js vjs-big-play-centered" style={{ maxHeight: '100vh' }} />
    </div>
  );
}

export default VideoJS;
