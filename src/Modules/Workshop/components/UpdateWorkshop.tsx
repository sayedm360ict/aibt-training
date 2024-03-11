/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Form, Input, Row, Select, Upload } from 'antd';

import { SendOutlined, UploadOutlined } from '@ant-design/icons';

function UpdateWorkshop({ id }: { id: string | undefined }) {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    // Add logic to update members using the form values here
  };

  const { Option } = Select;

  return (
    <>
      <Row align={'middle'} gutter={[5, 16]}>
        <Col xs={24} sm={24} md={24}>
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
                  <Form.Item
                    name='amount'
                    rules={[{ required: true }]}
                    label='Amount'
                    required
                  >
                    <Input placeholder='Amount' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='place'
                    rules={[{ required: true }]}
                    label='Place'
                    required
                  >
                    <Input placeholder='Place' type='text' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Select Status'
                    name='option'
                    initialValue='active'
                  >
                    <Select style={{ width: '310px' }}>
                      <Option value='active'>Active</Option>
                      <Option value='inactive'>In Active</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name='cover_photo'
                    label='Picnic Cover Photo'
                    required
                  >
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
                Update
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default UpdateWorkshop;
