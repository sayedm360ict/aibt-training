import { useRef } from 'react';
import {
  Button,
  Col,
  ConfigProvider,
  Descriptions,
  Row,
  Space,
  Typography,
  theme,
} from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { ReceiptHeader } from '../../../common/FormItem/InvoiceHeader';

const MoneyReceiptView = () => {
  const cashiercomponentRef = useRef(null);
  const handleCashierPrint = useReactToPrint({
    content: () => cashiercomponentRef.current,
    documentTitle: `MoneyReceipt_cashier_${'22-06-2023'}`,
  });
  return (
    <div>
      <Space>
        <Link to='/moneyreceipt/money-receipt-list'>
          <Button type='primary'>
            <ArrowLeftOutlined />
            Return to Money Receipt List
          </Button>
        </Link>
        <Button type='primary' onClick={handleCashierPrint}>
          <PrinterOutlined />
          Print
        </Button>
      </Space>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '6px',
          }}
        >
          <div
            style={{
              width: '9in',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'white',
              border: '1px solid lightgray',
            }}
          >
            <div
              ref={cashiercomponentRef}
              style={{
                padding: '0.3in',
                width: '8.27in',
                minHeight: '11.69in',
              }}
            >
              <div style={{ margin: '25px 0px', padding: '25px 0px' }}>
                <Row justify='space-between'>
                  <ReceiptHeader />
                  <Typography.Text strong className='mt-5'>
                    Money Receipt No: {'463246'}
                  </Typography.Text>{' '}
                  <br />
                  <Typography.Text strong className='mt-5'>
                    Date: {'22-06-2023'}
                  </Typography.Text>
                </Row>
                <Row justify='center' style={{ margin: '20px 0px' }}>
                  <Typography.Title underline level={5}>
                    Money Receipt (Member Copy)
                  </Typography.Title>
                </Row>
                <Row style={{ marginBottom: '.5rem' }}>
                  <Typography.Text>
                    Received with thanks from Mrs./Ms/Mr
                  </Typography.Text>
                  <Typography.Text
                    strong
                    underline
                    style={{ marginLeft: '.3rem' }}
                  >
                    {'abcd'}{' '}
                  </Typography.Text>
                </Row>
                <Row gutter={[6, 0]}>
                  <Col lg={24}>
                    <Descriptions size='small'>
                      <Descriptions.Item label='Payment Type'>
                        <strong> {'cash'}</strong>
                      </Descriptions.Item>
                      <Descriptions.Item label='Invoice No'>
                        <strong> {'43634'}</strong>
                      </Descriptions.Item>
                      <Descriptions.Item label='Total Received Amount'>
                        <strong> {'234234'}</strong>
                      </Descriptions.Item>

                      <Descriptions.Item label='Transaction No'>
                        <strong> {'34234234'}</strong>
                      </Descriptions.Item>
                      <Descriptions.Item label='Discount'>
                        <strong> {'0'}</strong>
                      </Descriptions.Item>
                    </Descriptions>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Typography.Text strong>Remarks :</Typography.Text>
                    {'ok'}
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
                  style={{ marginTop: '8rem' }}
                  justify='space-between'
                >
                  <Col span={6} xs={8} sm={8} md={8} lg={5} offset={1}>
                    <div
                      style={{
                        background: 'black',
                        margin: '0px',
                        width: '127px',
                        height: '1px',
                      }}
                    />
                    <Typography.Text strong>Customer Signature</Typography.Text>
                  </Col>
                  <Col span={6} xs={8} sm={8} md={8} lg={5}>
                    <div
                      style={{
                        background: 'black',
                        margin: '0px',
                        width: '113px',
                        height: '1px',
                      }}
                    />
                    <Typography.Text strong>Cashier Signature</Typography.Text>
                  </Col>
                </Row>
              </div>

              <div
                style={{
                  margin: '25px 0px',
                  borderTop: '1px dashed black',
                  padding: '45px 0px',
                }}
              >
                <Row justify='space-between'>
                  <ReceiptHeader />
                  <Typography.Text strong className='mt-5'>
                    Money Receipt No: {'463246'}
                  </Typography.Text>
                  <Typography.Text strong className='mt-5'>
                    Date: {'22-06-2023'}
                  </Typography.Text>
                </Row>

                <Row justify='center' style={{ margin: '20px 0px' }}>
                  <Typography.Title underline level={5}>
                    Money Receipt (Office Copy)
                  </Typography.Title>
                </Row>

                <Row style={{ marginBottom: '.5rem' }}>
                  <Typography.Text>
                    Received with thanks from Mrs./Ms/Mr
                  </Typography.Text>
                  <Typography.Text
                    strong
                    underline
                    style={{ marginLeft: '.3rem' }}
                  >
                    {'abcd'}{' '}
                  </Typography.Text>
                </Row>

                <Row gutter={[6, 0]}>
                  <Col lg={24}>
                    <Descriptions size='small'>
                      <Descriptions.Item label='Payment Type'>
                        <strong> {'cash'}</strong>
                      </Descriptions.Item>
                      <Descriptions.Item label='Invoice No'>
                        <strong> {'24234'}</strong>
                      </Descriptions.Item>
                      <Descriptions.Item label='Total Received Amount'>
                        <strong> {'234234'}</strong>
                      </Descriptions.Item>

                      <Descriptions.Item label='Transaction No'>
                        <strong> {'23423423'}</strong>
                      </Descriptions.Item>
                      <Descriptions.Item label='Discount'>
                        <strong> {'0'}</strong>
                      </Descriptions.Item>
                    </Descriptions>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Typography.Text strong>Remarks :</Typography.Text>
                    {'ok'}
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
                  style={{ marginTop: '6rem' }}
                  justify='space-between'
                >
                  <Col span={6} xs={8} sm={8} md={8} lg={5} offset={1}>
                    <div
                      style={{
                        background: 'black',
                        margin: '0px',
                        width: '127px',
                        height: '1px',
                      }}
                    />
                    <Typography.Text strong>Customer Signature</Typography.Text>
                  </Col>

                  <Col span={6} xs={8} sm={8} md={8} lg={5}>
                    <div
                      style={{
                        background: 'black',
                        margin: '0px',
                        width: '113px',
                        height: '1px',
                      }}
                    />
                    <Typography.Text strong>Cashier Signature</Typography.Text>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default MoneyReceiptView;
