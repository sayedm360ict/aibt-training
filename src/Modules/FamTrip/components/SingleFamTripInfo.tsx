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
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCommonModal } from '../../../app/slice/modalSlice';
import UpdateFamTrip from './UpdateFamTrip';

const SingleFamTripInfo = () => {
  // Dummy data (replace with actual data)
  const singleMember = {
    data: {
      title: 'Fam trip',
      startDate: '22-06-1998',
      endDate: '22-06-1998',
      details: 'Picnic',
      destination: 'Dhaka',
      adultSeatPrice: '5235235',
      childSeatPrice: '5235235',
      totalSeats: '200',
      availableSeat: '40',
      reservedSeats: '80',
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
        title: 'Update Fam Trip',
        content: <UpdateFamTrip id={id} />,
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
                    src={`https://tourrom.com/wp-content/uploads/2019/01/Saint-Martin-Island.jpg`}
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
                    <AiOutlineCalendar /> Start Date:{' '}
                    {singleMember.data.startDate}
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineCalendar /> End Date: {singleMember.data.endDate}
                  </Typography.Text>
                  <Typography.Text>
                    <EnvironmentOutlined /> Destination:{' '}
                    {singleMember.data.destination}
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineFolder /> Details: {singleMember.data.details}
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineCreditCard /> Adult Seat Price:{' '}
                    {singleMember.data.adultSeatPrice} BDT
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineCreditCard /> Child Seat Price:{' '}
                    {singleMember.data.childSeatPrice} BDT
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineCreditCard /> Total Seats:{' '}
                    {singleMember.data.totalSeats}
                  </Typography.Text>

                  <Typography.Text>
                    <AiOutlineCreditCard /> Available Seats:{' '}
                    {singleMember.data.availableSeat}
                  </Typography.Text>
                  <Typography.Text>
                    <AiOutlineCreditCard /> Reserved Seats:{' '}
                    {singleMember.data.reservedSeats}
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

export default SingleFamTripInfo;
