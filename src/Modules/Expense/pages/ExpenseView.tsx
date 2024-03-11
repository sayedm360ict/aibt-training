/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Button, ConfigProvider, Row, Space, Typography, theme } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { InvoiceHeader } from '../../../common/FormItem/InvoiceHeader';

const ExpenseView = () => {
  const cashiercomponentRef = useRef(null);
  const handleCashierPrint = useReactToPrint({
    content: () => cashiercomponentRef.current,
    documentTitle: `MoneyReceipt_cashier_${'22-06-2023'}`,
  });

  return (
    <div>
      <Space style={{ marginBottom: '1rem' }}>
        <Link to='/expense/expense-list'>
          <Button type='primary'>
            <ArrowLeftOutlined />
            Return to All Expense List
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
                padding: '0.5in',
                width: '8.27in',
                minHeight: '11.69in',
                position: 'relative', // Set the parent container to relative positioning
              }}
            >
              <div style={{ margin: '5px 0px', padding: '5px 0px' }}>
                <InvoiceHeader />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    {/* Left content */}
                    <Typography.Text strong style={{ marginTop: '5px' }}>
                      Expense ID: #{'IV-0098'}
                    </Typography.Text>
                    <br />
                    <Typography.Text strong style={{ marginTop: '5px' }}>
                      Created Date: {'22-09-2023'}
                    </Typography.Text>
                    <br />
                    <Typography.Text strong style={{ marginTop: '5px' }}>
                      Created By: {'22-09-2023'}
                    </Typography.Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {/* Right content */}
                    <Typography.Text strong style={{ marginTop: '5px' }}>
                      MEMBER: {'abc'}
                    </Typography.Text>
                    <br />
                    <Typography.Text strong style={{ marginTop: '5px' }}>
                      MEMBER ID: {'3543'}
                    </Typography.Text>
                    <br />
                    <Typography.Text strong style={{ marginTop: '5px' }}>
                      Details: {'ok'}
                    </Typography.Text>
                    <br />
                  </div>
                </div>
                <Row justify='center' style={{ margin: '20px 0px' }}>
                  <Typography.Title underline level={3}>
                    Expense
                  </Typography.Title>
                </Row>

                <div
                  style={{
                    position: 'absolute', // Position these divs absolutely within the parent container
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '2rem', // Add some margin for separation
                  }}
                >
                  <div>
                    <strong>This is computer generated invoice</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default ExpenseView;
