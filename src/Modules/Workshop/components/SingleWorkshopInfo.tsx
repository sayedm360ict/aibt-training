/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Row, Col, Card, Space, Button } from 'antd';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineFolder } from 'react-icons/ai';
import { AiOutlineCreditCard } from 'react-icons/ai';

import {
  UserOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { setCommonModal } from '../../../app/slice/modalSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import UpdateWorkshop from './UpdateWorkshop';

const SingleWorkshopInfo = () => {
  // Dummy data (replace with actual data)
  const singleMember = {
    data: {
      title: 'Workshop  Data',
      picnic_date: '22-06-1998',
      details: 'Picnic',
      place: 'Dhaka',
      amount: '5235235',
      createdAt: '22-09-2023',
      createdBy: 'Person 1',
      updatedBy: 'Update Person 2',
      updatedAt: '22-09-2023',
    },
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const showModal = () => {
    dispatch(
      setCommonModal({
        title: 'Update Workshop',
        content: <UpdateWorkshop id={id} />,
        show: true,
        width: 720,
      })
    );
  };
  return (
    <>
      {' '}
      <Card
        style={{
          boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
          marginBottom: '1rem',
        }}
      >
        <Row align={'middle'} justify={'space-between'} gutter={[5, 16]}>
          {' '}
          <Typography.Title level={3}>
            {singleMember.data.title}
          </Typography.Title>
          <div style={{ textAlign: 'end' }}>
            <Button onClick={showModal} type='primary'>
              Update
            </Button>
          </div>
        </Row>
      </Card>
      <Row style={{ marginTop: '1rem' }} gutter={[16, 16]}>
        <Col xl={24} lg={24} xs={24}>
          <Card bordered={false} style={{ height: '100%' }}>
            <Row gutter={[16, 16]}>
              <Col xl={12} lg={12} xs={24}>
                {/* Display the picture on the left */}
                <div
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: 'auto',
                  }}
                >
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sCND0Mbh2510JTIF527NYae-d_QQ7N0KHw&usqp=CAU`}
                    alt={`${singleMember?.data?.title}'s Avatar`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </Col>
              <Col xl={12} lg={12} xs={24}>
                <Space direction='vertical' style={{ width: '100%' }}>
                  <Typography.Text>
                    <AiOutlineCalendar /> Workshop Date:{' '}
                    {singleMember.data.picnic_date}
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineFolder /> Details: {singleMember.data.details}
                  </Typography.Text>
                  <Typography.Text>
                    <EnvironmentOutlined /> Place: {singleMember.data.place}
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineCreditCard /> Amount: {singleMember.data.amount}{' '}
                    BDT
                  </Typography.Text>
                  <Typography.Text>
                    <UserOutlined /> Created By: {singleMember.data.createdBy}
                  </Typography.Text>
                  <Typography.Text>
                    <CalendarOutlined /> Created At:{' '}
                    {dayjs(singleMember.data.createdAt).format(
                      'dddd, MMMM D, YYYY h:mm A'
                    )}
                  </Typography.Text>
                  <Typography.Text>
                    <UserOutlined /> Updated By: {singleMember.data.updatedBy}
                  </Typography.Text>
                  <Typography.Text>
                    <CalendarOutlined /> Updated At:{' '}
                    {dayjs(singleMember.data.updatedAt).format(
                      'dddd, MMMM D, YYYY h:mm A'
                    )}
                  </Typography.Text>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleWorkshopInfo;
