/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Col, Form, Row, Select } from 'antd';

import { SendOutlined } from '@ant-design/icons';

function UpdateMembers({ id }: { id: string | undefined }) {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    // Add logic to update members using the form values here
  };

  const { Option } = Select;

  return (
    <>
      <Card
        className='border'
        style={{ marginBottom: '1rem', marginTop: '1rem' }}
      >
        <Row align={'middle'} gutter={[5, 16]}>
          <Col xs={24} sm={24} md={24}>
            <Form
              form={form}
              onFinish={onFinish}
              layout='vertical'
              hideRequiredMark
            >
              <Form.Item name='option' initialValue='option1'>
                <Select style={{ width: '300px' }}>
                  <Option value='option1'>Option 1</Option>
                  <Option value='option2'>Option 2</Option>
                  <Option value='option3'>Option 3</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType='submit'
                  type='primary'
                  icon={<SendOutlined />}
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default UpdateMembers;
