/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Button, Card, Col, Input, Row, Typography, Upload } from 'antd';
import { DateInput } from '../../../components/FormItems/FormItems';

const CreateFamTrip = () => {
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
            <Typography.Title level={5}>Create Fam Trip</Typography.Title>
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
                  <DateInput
                    label='Trip Start Date'
                    name='tripStartDate'
                    placeholder='Trip Start Date'
                    size={24}
                    value={0}
                    required
                  />
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <DateInput
                    label='Trip End Date'
                    name='tripEndDate'
                    placeholder='Trip End Date'
                    size={24}
                    value={0}
                    required
                  />
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='destination'
                    rules={[{ required: true }]}
                    label='Destination'
                    required
                  >
                    <Input placeholder='Destination' type='text' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='details'
                    rules={[{ required: true }]}
                    label='Details'
                    required
                  >
                    <Input placeholder='Details' type='text' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='childrenPerSeatPrice'
                    rules={[{ required: true }]}
                    label='Children Seat Price'
                    required
                  >
                    <Input placeholder='Children Seat Price' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='adultPerSeatPrice'
                    rules={[{ required: true }]}
                    label='Adult Seat Price'
                    required
                  >
                    <Input placeholder='Adult Seat Price' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='totalSeat'
                    rules={[{ required: true }]}
                    label='Total Seat'
                    required
                  >
                    <Input placeholder='Total Seat' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='reservedSeat'
                    rules={[{ required: true }]}
                    label='Reserved Seat'
                    required
                  >
                    <Input placeholder='Reserved Seat' type='number' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8}>
                  <Form.Item
                    name='availableSeat'
                    rules={[{ required: true }]}
                    label='Available Seat'
                    required
                  >
                    <Input placeholder='Available Seat' type='number' />
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

export default CreateFamTrip;
