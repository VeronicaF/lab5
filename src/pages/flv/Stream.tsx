import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import flvjs from 'flv.js';
import type FlvJs from 'flv.js';
import style from './stream.less';
import { Input, Radio, Space, Switch } from 'antd';

const Stream: FC = (props) => {
  const el = useRef<HTMLVideoElement>(null);
  const player = useRef<FlvJs.Player>();
  const [streamURL, setStreamURL] = useState("http://159.75.87.63/live?app=demo&stream=stream-1")
  // 播放器配置
  useEffect(() => {
    if (!streamURL || !el.current) {
      return;
    }
    const videoEl = el.current;
    const p = flvjs.createPlayer(
      {
        type: 'flv',
        isLive: true,
        url: streamURL,
      },
      {
        enableStashBuffer: false,
        stashInitialSize: 128,
      },
    );
    p.attachMediaElement(el.current);
    p.load();
    player.current = p;
    // const play = () => p.play();
    // el.current.addEventListener('canplay', play);
    return () => {
      p.destroy();
      // videoEl.removeEventListener('canplay', play);
    };
  }, [streamURL]);

  return (
    <div style={{ width: '100%', minHeight: '500px', position: 'relative', maxHeight: '100%', padding: '20px' }}>
      <h1>
        视频URL：
        <Input value={streamURL} onChange={e => setStreamURL(e.target.value)} />
      </h1>
      <div className={style.normal} style={{ visibility: streamURL ? 'visible' : 'hidden' }}>
        <video ref={el} className={style.video} controls preload="" />
      </div>
    </div>
  );
};

export default Stream;
