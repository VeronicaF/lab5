import { Input } from 'antd';
import { useState } from 'react';

const Record = () => {
  const [streamURL, setStreamURL] = useState("http://159.75.87.63/record/stream-1-1636793444.mp4")

  return (
    <>
      <h1>
        视频URL：
        <Input value={streamURL} onChange={e => setStreamURL(e.target.value)} />
      </h1>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video src={streamURL} controls />
      </div>
    </>
  )
}

export default Record
