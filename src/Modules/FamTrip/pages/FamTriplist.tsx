/* eslint-disable @typescript-eslint/no-explicit-any */
import { EyeOutlined } from '@ant-design/icons';
import {
  Avatar,
  Card,
  Col,
  DatePicker,
  Row,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import Search from 'antd/es/input/Search';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
  key: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: string;
  totalSeat: number;
  id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
    render: (text) => (
      <span style={{ fontSize: '16px' }}>
        <Avatar
          style={{ marginRight: '1.5rem' }}
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPvW6SHxfmMHwaL4-z9L2tOI0tP3qKLjh0tON9fRxZA&s`}
        />{' '}
        {text}
      </span>
    ),
  },

  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color='success' key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'View',
    key: 'action',
    render: (record: any) => (
      <Space size='middle'>
        <Link to={`${record.id}`}>
          <Tooltip title='View'>
            <EyeOutlined style={{ cursor: 'pointer' }} />
          </Tooltip>
        </Link>
        {/* More actions can be added here */}
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    id: 1,
    key: '1',
    destination: 'John Brown',
    startDate: '22-06-1998',
    endDate: '22-06-1998',
    status: 'developer',
    totalSeat: 100,
  },
  {
    id: 2,
    key: '2',
    destination: 'John Brown',
    startDate: '22-06-1998',
    endDate: '22-06-1998',
    status: 'developer',
    totalSeat: 100,
  },
  {
    id: 3,
    key: '3',
    destination: 'John Brown',
    startDate: '22-06-1998',
    endDate: '22-06-1998',
    status: 'developer',
    totalSeat: 100,
  },
];
const Famtriplist = () => {
  const { RangePicker } = DatePicker;

  return (
    <>
      <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title level={5}>Workshop List</Typography.Title>

          <Card
            style={{
              boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
              marginBottom: '1rem',
            }}
          >
            <Row align={'middle'} justify={'start'} gutter={[8, 16]}>
              <Col xs={24} sm={24} md={8} lg={5}>
                <Search
                  placeholder='Search By Destination'
                  style={{ width: '95%' }}
                />
              </Col>
              <Col xs={24} sm={24} md={8} lg={5}>
                <Search
                  placeholder='Search By Status'
                  style={{ width: '95%' }}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={8}
                lg={5}
                style={{ marginLeft: 'auto', order: 2 }}
              >
                <RangePicker style={{ width: '95%' }} />
              </Col>
            </Row>
          </Card>
          <Card
            style={{
              boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
              marginBottom: '1rem',
            }}
          >
            <div>
              <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: true }}
                pagination={{ showSizeChanger: true }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Famtriplist;
