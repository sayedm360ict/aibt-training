/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Form, Input, Row, Select, Upload } from 'antd';

import { SendOutlined, UploadOutlined } from '@ant-design/icons';
import { DateInput } from '../../../components/FormItems/FormItems';

function UpdateFamTrip({ id }: { id: string | undefined }) {
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
                    label='Trip Start Date'
                    name='tripStartDate'
                    placeholder='Trip Start Date'
                    size={24}
                    value={0}
                    required
                  />
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <DateInput
                    label='Trip End Date'
                    name='tripEndDate'
                    placeholder='Trip End Date'
                    size={24}
                    value={0}
                    required
                  />
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='destination'
                    rules={[{ required: true }]}
                    label='Destination'
                    required
                  >
                    <Input placeholder='Destination' type='text' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='details'
                    rules={[{ required: true }]}
                    label='Details'
                    required
                  >
                    <Input placeholder='Details' type='text' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='childrenPerSeatPrice'
                    rules={[{ required: true }]}
                    label='Children Seat Price'
                    required
                  >
                    <Input placeholder='Children Seat Price' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='adultPerSeatPrice'
                    rules={[{ required: true }]}
                    label='Adult Seat Price'
                    required
                  >
                    <Input placeholder='Adult Seat Price' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='totalSeat'
                    rules={[{ required: true }]}
                    label='Total Seat'
                    required
                  >
                    <Input placeholder='Total Seat' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='reservedSeat'
                    rules={[{ required: true }]}
                    label='Reserved Seat'
                    required
                  >
                    <Input placeholder='Reserved Seat' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name='availableSeat'
                    rules={[{ required: true }]}
                    label='Available Seat'
                    required
                  >
                    <Input placeholder='Available Seat' type='number' />
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

export default UpdateFamTrip;
