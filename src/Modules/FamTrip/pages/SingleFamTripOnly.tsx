import { useState } from 'react';

import { Button, Row, Tabs, TabsProps } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import SingleJoinedFamTripMember from '../components/SingleJoinedFamTripMember';
import SingleFamTripInfo from '../components/SingleFamTripInfo';

const SingleFamTripOnly = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const navigate = useNavigate();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Joined Members`,
      children: <SingleJoinedFamTripMember />,
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

      <SingleFamTripInfo />
      <Tabs
        defaultActiveKey={activeTab}
        items={items}
        onChange={(key) => setActiveTab(key)}
      />
    </>
  );
};

export default SingleFamTripOnly;
