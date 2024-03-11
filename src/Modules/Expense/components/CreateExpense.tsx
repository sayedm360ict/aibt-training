/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Row, Card, Typography, Col, Select } from 'antd';
import {
  FormCommonInput,
  FormNumberInput,
  FormTextArea,
} from '../../../common/Input/FromInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';

const CreateExpense = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
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
        <Typography.Title level={5}>Create Expense</Typography.Title>
      </Row>
      <Form hideRequiredMark form={form} onFinish={onFinish} layout='vertical'>
        <Card className='border' style={{ marginBottom: '1rem' }}>
          <Row align={'middle'} gutter={[5, 16]}>
            <FormCommonInput
              name='title'
              label='Title'
              placeholder='Title'
              rules={[{ required: true }]}
            />

            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label='Select Account'
                name='option'
                initialValue='account1'
                rules={[{ required: true }]}
              >
                <Select>
                  <Option value='account1'>Account 1</Option>
                  <Option value='account2'>Account 2</Option>
                </Select>
              </Form.Item>
            </Col>

            <FormNumberInput
              name='total'
              label='Total Amount'
              rules={[{ required: true }]}
            />
            <FormCommonInput
              name='remarks'
              label='Remarks'
              rules={[{ required: true }]}
            />
            <FormTextArea
              name='details'
              label='Details'
              required
              rules={{ required: true }}
            />
          </Row>
        </Card>

        <SubmitButton />
      </Form>
    </Card>
  );
};

export default CreateExpense;
