import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
import { request } from 'umi'
import { useRequest } from 'ahooks';

const Record = () => {
  const { data } = useRequest(
    () => request<string[]>('http://159.75.87.63/filelist'),
    {
      pollingInterval: 1000,
      onError(e) {
        console.log(e)
      }
    }
  )
  const [streamURL, setStreamURL] = useState("")

  return (
    <>
      <h1>
        视频URL：
        <Radio.Group onChange={e => setStreamURL(e.target.value)} value={streamURL}>
          <Space direction="vertical">
            { data?.map(file => (
              <Radio value={`http://159.75.87.63/record/${file}`} key={file}>{ file }</Radio>
            )) }
          </Space>
        </Radio.Group>
      </h1>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video src={streamURL} controls />
      </div>
    </>
  )
}

export default Record
