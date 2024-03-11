/*
Change Password
@Author MD Mamun Miah <mamunahmed.m360ict@gmail.com>
*/
import { Form, Input, Button, Divider, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./LoginDesign.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useChangePasswordMutation } from "./forget_api/forgetApi";
import AIBT from "../../assets/logo.png";

type IForget = {
  password: string;
  email: string;
  token: string;
};
const ChangePassword = () => {
  const [changePass, { isSuccess }] = useChangePasswordMutation();
  const [query] = useSearchParams();
  const email = query.get("email");
  const token = localStorage.getItem("otpToken");
  const navigate = useNavigate();

  const onFinish = (values: IForget) => {
    const body = {
      email: email,
      token: token,
      password: values.password,
    };
    changePass(body);
  };
  if (isSuccess) {
    navigate("/login");
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
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          New Password
        </Typography.Title>
        <Form onFinish={onFinish} name="login-form">
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item className="button-container">
            <Button type="primary" htmlType="submit" className="login-button">
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

export default ChangePassword;
