import { useEffect, useRef, useState } from 'react';
import { VideoJsPlayer } from 'video.js';
import VideoJS from '@/pages/hls/VideoJS';
import { Input } from 'antd';

const HLSLive = () => {
  const playerRef = useRef<VideoJsPlayer>();
  const [streamURL, setStreamURL] = useState("http://159.75.87.63/hls/stream-1.m3u8")

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: streamURL,
    }]
  }

  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }
    playerRef.current.src([{ src: streamURL }]);
  }, [streamURL])

  return (
    <div style={{ maxWidth: '100%', maxHeight: '500px' }}>
      <h1>
        视频URL：
        <Input value={streamURL} onChange={e => setStreamURL(e.target.value)} />
      </h1>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default HLSLive
