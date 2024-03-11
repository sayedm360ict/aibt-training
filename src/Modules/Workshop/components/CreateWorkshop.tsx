/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Button, Card, Col, Input, Row, Typography, Upload } from 'antd';
import { DateInput } from '../../../components/FormItems/FormItems';

const CreateWorkshop = () => {
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
            <Typography.Title level={5}>Create Workshop</Typography.Title>
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
                    name='title'
                    label='Title'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Title',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Title' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='details'
                    label='Details'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Details',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Details' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <DateInput
                    label='Workshop Date'
                    name='workshopDate'
                    placeholder='Workshop Date'
                    size={24}
                    value={0}
                    required
                  />
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='place'
                    rules={[{ required: true }]}
                    label='Place'
                    required
                  >
                    <Input placeholder='Place' type='text' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='amount'
                    rules={[{ required: true }]}
                    label='Amount'
                    required
                  >
                    <Input placeholder='Amount' type='number' />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name='photo' label='Photo' required>
                    <Upload
                      accept='image/png, image/jpeg, image/jpg, image/webp'
                      listType='picture'
                      beforeUpload={() => false}
                    >
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
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

export default CreateWorkshop;
