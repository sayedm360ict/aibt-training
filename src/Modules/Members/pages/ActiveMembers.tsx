/* eslint-disable @typescript-eslint/no-explicit-any */
import { EyeOutlined } from '@ant-design/icons';
import {
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
  name: string;
  id: number;
  email: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
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
    key: '1',
    name: 'John Brown',
    id: 32,
    email: 'demo@gmail.com',
    status: 'developer',
  },
  {
    key: '2',
    name: 'John Brown',
    id: 32,
    email: 'demo@gmail.com',
    status: 'developer',
  },
  {
    key: '3',
    name: 'John Brown',
    id: 32,
    email: 'demo@gmail.com',
    status: 'developer',
  },
];
const ActiveMember = () => {
  const { RangePicker } = DatePicker;

  return (
    <>
      <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title level={5}>Active Members List</Typography.Title>

          <Card
            style={{
              boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
              marginBottom: '1rem',
            }}
          >
            <Row align={'middle'} justify={'space-between'} gutter={[5, 16]}>
              <Col xs={24} sm={12} md={12} lg={6}>
                <Search
                  placeholder='Search by Company'
                  style={{ width: '100%' }}
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={6}>
                <RangePicker style={{ width: '100%' }} />
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

export default ActiveMember;
