/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendOutlined } from '@ant-design/icons';
import { Form, Button, Card, Col, Input, Row, Typography } from 'antd';

const CreateMembers = () => {
  const [form] = Form.useForm();

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
            <Typography.Title level={5}>Create Member</Typography.Title>
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
                    name='name'
                    label='Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Name',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Name' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='company_name'
                    label='Company Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Company Name',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Company Name' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='phone'
                    rules={[{ required: true }]}
                    label='Phone No'
                    required
                  >
                    <Input placeholder='Phone No' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='email'
                    rules={[{ required: true }]}
                    label='Email'
                    required
                  >
                    <Input placeholder='Email' type='email' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='password'
                    rules={[{ required: true }]}
                    label='Password'
                    required
                  >
                    <Input placeholder='Password' type='password' />
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

export default CreateMembers;
