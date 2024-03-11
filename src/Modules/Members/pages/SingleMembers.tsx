/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Row, Col, Card, Space, Grid, Tag, Button } from 'antd';

import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  BankOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

import dayjs from 'dayjs';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCommonModal } from '../../../app/slice/modalSlice';
import UpdateMembers from '../components/UpdateMembers';

const { useBreakpoint } = Grid;

// Mock data for demonstration purposes
const mockSingleMemberData = {
  company_details: 'Admin User',
  applicants_details: 'Admin User',
  updatedBy: 'Admin User',
  createdBy: 'Admin User',
  createdAt: '2023-09-07',
  updatedAt: '2023-09-07',
};

const SingleMembers = () => {
  const { xl } = useBreakpoint();
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleMember = mockSingleMemberData;
  const showModal = () => {
    dispatch(
      setCommonModal({
        title: 'Update Members',
        content: <UpdateMembers id={id} />,
        show: true,
        width: 720,
      })
    );
  };
  return (
    <>
      <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
        <Col xl={24} lg={24} xs={24}>
          <div style={{ marginBottom: '10px' }}>
            <Card>
              {' '}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <BreadCrumb />
                <Button onClick={showModal} type='primary'>
                  Update
                </Button>
              </div>
            </Card>
          </div>
          <Card bordered={false} style={{ height: '100%' }}>
            <Space
              direction='vertical'
              style={{ width: '100%', height: '100%' }}
            >
              <Space
                direction='vertical'
                style={{ textAlign: 'center', width: '100%' }}
              >
                <Typography.Title level={3}>{'Company A'}</Typography.Title>
              </Space>
              <Space
                direction='vertical'
                style={{ width: '100%', textAlign: xl ? 'unset' : 'center' }}
              >
                <Typography.Text>
                  <BankOutlined /> Company Details:{' '}
                  {singleMember.company_details}
                </Typography.Text>
                <Typography.Text>
                  <UserOutlined /> Applicant's Details:{' '}
                  {singleMember.applicants_details}
                </Typography.Text>

                <Typography.Text>
                  <UserOutlined /> Updated By: {singleMember.updatedBy}
                </Typography.Text>
                <Typography.Text>
                  <UserOutlined /> Created By: {singleMember.createdBy}
                </Typography.Text>
                <Typography.Text>
                  <CalendarOutlined /> Updated At:{' '}
                  {dayjs(singleMember.updatedAt).format(
                    'dddd, MMMM D, YYYY h:mm A'
                  )}
                </Typography.Text>
                <Typography.Text>
                  <CalendarOutlined /> Created At:{' '}
                  {dayjs(singleMember.createdAt).format(
                    'dddd, MMMM D, YYYY h:mm A'
                  )}
                </Typography.Text>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleMembers;
