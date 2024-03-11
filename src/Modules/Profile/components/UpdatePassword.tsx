/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Form, Row, Col, Input, Card } from "antd";

import { useDispatch } from "react-redux";
import { LockOutlined } from "@ant-design/icons";

import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import { useUpdatePasswordMutation } from "../../../app/api/userApi/userApi";
import { IUpdatePassword } from "../../../auth/types/loginTypes";
import { setCommonModal } from "../../../app/slice/modalSlice";

const UpdatePassword = () => {
  const [form] = Form.useForm();
  const [updatePass, { isLoading, isSuccess, isError }] =
    useUpdatePasswordMutation();
  const dispatch = useDispatch();

  // Custom validation rule to check if old and new passwords are the same
  const validatePassword = (_: any, value: any) => {
    if (value === form.getFieldValue("old_password")) {
      return Promise.reject(
        "New password cannot be the same as the Old Password"
      );
    }
    return Promise.resolve();
  };

  const onFinish = async (values: IUpdatePassword) => {
    const body: IUpdatePassword = {
      ...values,
    };

    await updatePass(body);
    form.resetFields();
  };
  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      dispatch(setCommonModal());
    } else if (isError) {
      console.log("Failed to update password. Please try again.");
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Form hideRequiredMark form={form} onFinish={onFinish} layout="vertical">
        <Card
          className="border"
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          <Row align={"middle"} gutter={[5, 16]}>
            <Col span={12}>
              <Form.Item
                label="Old Password"
                name="old_password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Old Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Old Password"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="New Password"
                name="new_password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your New Password!",
                  },
                  {
                    validator: validatePassword, // Custom validation rule
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="New Password"
                />
              </Form.Item>
            </Col>
          </Row>

          <SubmitButton loading={isLoading} />
        </Card>
      </Form>
    </>
  );
};

export default UpdatePassword;
