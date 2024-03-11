/*
Balance Transfer
@Author Istiak Ahmed <istiak.m360ict@gmail.com>
*/

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Row, Card, Typography, Input, Col } from 'antd';
import { SendOutlined } from '@ant-design/icons';

import { useState } from 'react';
import FormInput, { FormTextArea } from '../../../common/Input/FromInput';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';

const BalanceTransfer = () => {
  const [fromAccount, setFromAccount] = useState<any[]>([]);
  const [_toAccount, setToAccount] = useState<any[]>([]);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
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
        <Typography.Title level={5}>Balance Transfer</Typography.Title>
      </Row>
      <Form hideRequiredMark form={form} onFinish={onFinish} layout='vertical'>
        <Card
          className='border'
          style={{ marginBottom: '1rem', marginTop: '1rem' }}
        >
          <Row align={'middle'} gutter={[5, 16]}>
            <Col xs={24} sm={24} md={12}>
              {/* <SelectFromAccount
              required
              name='from_ac'
              label='From Account'
              setAccountDetails={setFromAccount}
              // accountSelectID={toAccount[0]?.id}
            /> */}
              {/* <SelectFromAccount
              required
              name='to_ac'
              label='To Account'
              setAccountDetails={setToAccount}
              accountSelectID={fromAccount[0]?.id}
            /> */}
              <Form.Item
                name='from_ac'
                label='From Account'
                rules={[
                  {
                    required: true,
                    message: 'Please input your From Account',
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder='From Account' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name='to_ac'
                label='To Account'
                rules={[
                  {
                    required: true,
                    message: 'Please input your To Account',
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder='To Account' />
              </Form.Item>
            </Col>
            <FormInput
              name='amount'
              label='Amount'
              placeholder='Amount'
              required
              numberType
              rules={[
                {
                  required: true,
                  whitespace: true,
                  validator: (_rule: unknown, value: string) => {
                    if (
                      fromAccount[0]?.balance &&
                      Number(value) > Number(fromAccount[0]?.balance)
                    ) {
                      return Promise.reject(
                        `"Your account balance is ${
                          fromAccount[0]?.balance +
                          ' Taka! Please enter a smaller amount'
                        }`
                      );
                    } else if (!value) {
                      return Promise.reject('Please input your Amount!');
                    } else {
                      return Promise.resolve();
                    }
                  },
                },
              ]}
            />
            <FormInput
              name='remarks'
              label='Remarks'
              placeholder='Remarks'
              required
              rules={[
                {
                  required: true,
                  message: 'Please input your Remarks!',
                  whitespace: true,
                },
              ]}
            />
            <FormTextArea
              name='details'
              label='Details'
              placeholder='Details'
              required
              rules={[
                {
                  required: true,
                  message: 'Please input your Details!',
                  whitespace: true,
                },
              ]}
            />
          </Row>
        </Card>
        <SubmitButton icon={<SendOutlined />} />
      </Form>
    </Card>
  );
};

export default BalanceTransfer;
