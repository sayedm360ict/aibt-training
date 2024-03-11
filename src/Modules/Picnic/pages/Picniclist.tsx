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
  title: string;
  date: string;
  status: string;
  id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
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
    title: 'John Brown',
    date: '22-06-1998',
    status: 'developer',
  },
  {
    id: 1,
    key: '2',
    title: 'John Brown',
    date: '22-06-1998',
    status: 'developer',
  },
  {
    id: 1,
    key: '3',
    title: 'John Brown',
    date: '22-06-1998',
    status: 'developer',
  },
];
const Picniclist = () => {
  const { RangePicker } = DatePicker;

  return (
    <>
      <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title level={5}>Picnic List</Typography.Title>

          <Card
            style={{
              boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
              marginBottom: '1rem',
            }}
          >
            <Row align={'middle'} justify={'start'} gutter={[8, 16]}>
              <Col xs={24} sm={24} md={8} lg={5}>
                <Search
                  placeholder='Search By Title'
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

export default Picniclist;
