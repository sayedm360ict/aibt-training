import { useState } from 'react';

import { Button, Row, Tabs, TabsProps } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import SingleEventInfo from '../components/SingleEventInfo';
import SingleJoinedEventMember from '../components/SingleJoinedEventMember';

const SingleEventOnly = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const navigate = useNavigate();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Joined Members`,
      children: <SingleJoinedEventMember />,
    },
  ];

  return (
    <>
      <Row
        align={'middle'}
        style={{ paddingBottom: '1rem' }}
        justify={'space-between'}
      >
        <Button onClick={() => navigate(-1)} type='primary'>
          <ArrowLeftOutlined /> Go To List
        </Button>
      </Row>

      <SingleEventInfo />
      <Tabs
        defaultActiveKey={activeTab}
        items={items}
        onChange={(key) => setActiveTab(key)}
      />
    </>
  );
};

export default SingleEventOnly;
