/* eslint-disable @typescript-eslint/no-explicit-any */
import { EyeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Table, Tooltip, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
  key: string;
  id: number;
  amount: number;
  member: string;
  money_receipt_id: number;
  invoice_id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Member',
    dataIndex: 'member',
    key: 'member',
  },
  {
    title: 'MoneyReceipt ID',
    dataIndex: 'money_receipt_id',
    key: 'money_receipt_id',
  },
  {
    title: 'Invoice ID',
    dataIndex: 'invoice_id',
    key: 'invoice_id',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
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
    amount: 436,
    member: 'string',
    money_receipt_id: 33,
    invoice_id: 1,
  },
  {
    id: 1,
    key: '2',
    amount: 436,
    member: 'string',
    money_receipt_id: 33,
    invoice_id: 1,
  },
  {
    id: 1,
    key: '3',
    amount: 436,
    member: 'string',
    money_receipt_id: 33,
    invoice_id: 1,
  },
];
const Moneyreceiptlist = () => {
  return (
    <>
      <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title level={5}>Moneyreceipt List</Typography.Title>

          <Card
            style={{
              boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
              marginBottom: '1rem',
            }}
          >
            <Row align={'middle'} justify={'start'} gutter={[8, 16]}>
              <Col xs={24} sm={24} md={8} lg={5}>
                <Search
                  placeholder='Search By Member'
                  style={{ width: '95%' }}
                />
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

export default Moneyreceiptlist;
