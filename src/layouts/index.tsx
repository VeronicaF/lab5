import { Button, Space, Layout } from 'antd';
import { Link } from 'umi';
import { FC } from 'react';
import { Content, Header } from 'antd/es/layout/layout';


const BasicLayout: FC = props => {
  return (
    <Layout>
      <Header>
        <Space>
          <Link to="/flv/live"><Button>http-flv直播</Button></Link>
          <Link to="/hls/live"><Button>hls直播</Button></Link>
          <Link to="/record"><Button>录播</Button></Link>
        </Space>
      </Header>
      <Content>
        { props.children }
      </Content>
    </Layout>
  )
}

export default BasicLayout
