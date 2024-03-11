/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Row, Col, Card, Space, Button } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setCommonModal } from '../../../app/slice/modalSlice';
import { useParams } from 'react-router-dom';
import UpdatePicnic from './UpdatePicnic';

const SinglePicnicInfo = () => {
  // Dummy data (replace with actual data)
  const singleMember = {
    data: {
      title: 'Picnic Day 1',
      picnic_date: '22-06-1998',
      details: 'Picnic',
      place: 'Dhaka',
      amount: '500',
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
        title: 'Update Picnic',
        content: <UpdatePicnic id={id} />,
        show: true,
        width: 720,
      })
    );
  };
  return (
    <>
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
                    src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg`}
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
                    <CalendarOutlined /> Picnic Date:{' '}
                    {singleMember.data.picnic_date}
                  </Typography.Text>
                  <Typography.Text>
                    <MailOutlined /> Details: {singleMember.data.details}
                  </Typography.Text>
                  <Typography.Text>
                    <EnvironmentOutlined /> Place: {singleMember.data.place}
                  </Typography.Text>
                  <Typography.Text>
                    <CreditCardOutlined /> Amount: {singleMember.data.amount}{' '}
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

export default SinglePicnicInfo;
