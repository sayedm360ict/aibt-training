/*
Send OTP
@Author MD Mamun Miah <mamunahmed.m360ict@gmail.com>
*/
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Divider, Typography } from "antd";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./LoginDesign.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSendOTPMutation } from "./forget_api/forgetApi";
import AIBT from "../../assets/logo.png";

type IForget = {
  email: string;
  type: string;
  otp: string;
};

const SendOtp = () => {
  const [getOTP, { isSuccess, isLoading, data }] = useSendOTPMutation();
  const [query] = useSearchParams();
  const email = query.get("email");
  const navigate = useNavigate();
  const onFinish = (values: IForget) => {
    const body = {
      email: email,
      otp: values.otp,
      type: "forget_admin",
    };
    getOTP(body);
  };
  if (isSuccess) {
    const resToken = data?.token;
    localStorage.setItem("otpToken", resToken);
    navigate(`/change-password?email=${email}`);
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
          <img src={AIBT} alt="brand logo" width={"auto"} height={60} />
        </div>
        <Divider style={{ margin: "10px" }} />
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Send OTP
        </Typography.Title>
        <Form onFinish={onFinish} name="login-form">
          <Form.Item name="otp" rules={[{ message: "Please enter your otp!" }]}>
            <Input type="number" placeholder="OTP" />
          </Form.Item>

          <Form.Item className="button-container">
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="login-button"
            >
              Submit
            </Button>
            <Divider style={{ marginBottom: "10px" }} />
            <span style={{ marginTop: "15rem" }}>
              <Link to="/login">Go Back</Link>
            </span>
          </Form.Item>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default SendOtp;
