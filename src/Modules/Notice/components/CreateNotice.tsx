/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Row, Card, Typography, Col, Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { FormFileInput } from '../../../common/Input/FromInput';
const CreateNotice = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { title: string; file: { file: File } }) => {
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
            <Typography.Title level={5}>Create Notice</Typography.Title>
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
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='title'
                    label='Title'
                    rules={[
                      {
                        required: true,
                        message: 'Please Input your Title',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input placeholder='Title' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item name='details' label='Details'>
                    <Input placeholder='Details' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <FormFileInput
                    name='file'
                    label='Notice file'
                    picture='picture'
                  />
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

export default CreateNotice;
