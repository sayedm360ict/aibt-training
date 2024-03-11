/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Row, Card, Typography } from 'antd';
import { FormCommonInput } from '../../../common/Input/FromInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';

const CreateExpenseHead = () => {
  const [form] = Form.useForm();

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
              name='expense_head'
              label='Expense Head'
              placeholder='Expense Head'
              rules={[{ required: true }]}
            />
          </Row>
        </Card>

        <SubmitButton />
      </Form>
    </Card>
  );
};

export default CreateExpenseHead;
