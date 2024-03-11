/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendOutlined } from '@ant-design/icons';
import { Form, Button, Card, Col, Input, Row, Typography, Select } from 'antd';

const CreateMoneyReceipt = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Row justify='center' align='middle' style={{ maxWidth: 'auto' }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card
          style={{
            boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
            marginBottom: '1rem',
          }}
        >
          <Row
            align={'middle'}
            justify={'space-between'}
            style={{ marginBottom: '1rem' }}
          >
            <Typography.Title level={5}>Create Moneyreceipt</Typography.Title>
          </Row>

          <Form
            hideRequiredMark
            onFinish={onFinish}
            layout='vertical'
            form={form}
          >
            <Card
              className='border'
              style={{ marginBottom: '1rem', marginTop: '1rem' }}
            >
              {' '}
              <Row align={'middle'} gutter={[5, 16]}>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    label='Select Member'
                    name='option'
                    initialValue='member1'
                    rules={[{ required: true }]}
                  >
                    <Select>
                      <Option value='member1'>Member 1</Option>
                      <Option value='member2'>Member 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    label='Select Invoice'
                    name='option1'
                    initialValue='invoice1'
                    rules={[{ required: true }]}
                  >
                    <Select>
                      <Option value='invoice1'>Invoice 1</Option>
                      <Option value='invoice2'>Invoice 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    label='Select Account'
                    name='option2'
                    initialValue='account1'
                    rules={[{ required: true }]}
                  >
                    <Select>
                      <Option value='account1'>Account 1</Option>
                      <Option value='account2'>Account 2</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='transaction-number'
                    rules={[{ required: true }]}
                    label='Transaction No'
                    required
                  >
                    <Input placeholder='Transaction No' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item name='remarks' label='Remarks'>
                    <Input placeholder='Remarks' type='text' />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Form.Item style={{ marginTop: '1rem' }}>
              <Button htmlType='submit' type='primary' icon={<SendOutlined />}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateMoneyReceipt;
