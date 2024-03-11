/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Form, Input, Row, Select, Upload } from 'antd';

import { SendOutlined, UploadOutlined } from '@ant-design/icons';
import { DateInput } from '../../../components/FormItems/FormItems';

function UpdateEvent({ id }: { id: string | undefined }) {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    // Add logic to update members using the form values here
  };

  const { Option } = Select;

  return (
    <>
      <Row align={'middle'} gutter={[5, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                  <DateInput
                    label='Date'
                    name='date'
                    placeholder='Date'
                    size={24}
                    value={0}
                    required
                  />
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='name'
                    rules={[{ required: true }]}
                    label='Name'
                    required
                  >
                    <Input placeholder='Name' type='text' />
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
                    name='amount'
                    rules={[{ required: true }]}
                    label='Amount'
                    required
                  >
                    <Input
                      defaultValue={0}
                      placeholder='Amount'
                      type='number'
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label='Select Status'
                    name='payable'
                    initialValue='Payable'
                  >
                    <Select style={{ width: '310px' }}>
                      <Option value='payable'>Payable</Option>
                      <Option value='free'>Free</Option>
                    </Select>
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
        </Col>
      </Row>
    </>
  );
}

export default UpdateEvent;
