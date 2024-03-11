/*
Forgot Password
@Author MD Mamun Miah <mamunahmed.m360ict@gmail.com>
*/
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Form, Input, Button, Divider, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./LoginDesign.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useGetOTPMutation } from "./forget_api/forgetApi";
import AIBT from "../../assets/logo.png";

type IForget = {
  email: string;
  type: string;
  otp: string;
};
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [getOTP, { isSuccess, isLoading }] = useGetOTPMutation();

  const onFinish = (values: IForget) => {
    const body = {
      email: values.email,
      otp: values.otp,
      type: "forget_admin",
    };
    getOTP(body);
  };
  if (isSuccess) {
    navigate(`/forget-password/otp?email=${email}`);
  }
  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="registration-form login-form-container"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="logo-container">
          <img src={AIBT} alt="brand logo" width={"auto"} height={50} />
        </div>
        <Divider style={{ margin: "10px" }} />
        <Typography.Title
          level={3}
          style={{ textAlign: "center", paddingBottom: "10px" }}
        >
          Forgot Password
        </Typography.Title>
        <Form name="login-form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ message: "Please enter your Email!" }]}
          >
            <Input
              onChange={(e: any) => setEmail(e.target.value)}
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item className="button-container">
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="login-button"
            >
              Send OTP
            </Button>
            <Divider style={{ marginBottom: "10px", marginTop: "50px" }} />
            <span style={{ marginTop: "15rem" }}>
              <Link to="/login" className="back-button">
                Go Back
              </Link>
            </span>
          </Form.Item>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default ForgotPassword;
