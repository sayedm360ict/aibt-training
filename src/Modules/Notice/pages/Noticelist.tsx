/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, DatePicker, Row, Table, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  title: string;
  date: string;
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
];

const data: DataType[] = [
  {
    id: 1,
    key: '1',
    title: 'John Brown',
    date: '22-06-1998',
  },
  {
    id: 2,
    key: '2',
    title: 'John Brown',
    date: '22-06-1998',
  },
  {
    id: 3,
    key: '3',
    title: 'John Brown',
    date: '22-06-1998',
  },
];
const Noticelist = () => {
  const { RangePicker } = DatePicker;

  return (
    <>
      <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title level={5}>Notice List</Typography.Title>

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

export default Noticelist;
