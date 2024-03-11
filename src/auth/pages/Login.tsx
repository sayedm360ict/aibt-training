/*
@file Login.tsx
@Author Istiak Ahmed<istiak.m360ict@gmail.com>
*/
import { Form, Input, Divider, Row, Col, Typography } from "antd";
import { LockOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./LoginDesign.css";
import { useLoginMutation } from "../../app/api/userApi/api";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import AIBT from "../../assets/logo.png";

type IInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const onFinish = (values: IInputs) => {
    const body = {
      email: values.email,
      password: values.password,
    };
    login(body);
  };

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
        <div className="logo-container ">
          <img src={AIBT} alt="brand logo" width={"auto"} height={50} />
        </div>
        <Divider style={{ margin: "10px" }} />
        <Typography.Title
          level={3}
          style={{ textAlign: "center", paddingBottom: "10px" }}
        >
          ADMIN LOGIN
        </Typography.Title>
        <Form name="login-form" onFinish={onFinish}>
          <Row gutter={[16, 8]}>
            <Col xs={24}>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not a valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <SubmitButton
                    loading={isLoading}
                    label="Login"
                    block
                    icon={<LoginOutlined />}
                  />
                </div>
              </Form.Item>
            </Col>
            <Divider style={{ marginTop: "0px", marginBottom: "10px" }} />
            <Col xs={24}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>
                  <Link to="/forget-password">Forget Password</Link>
                </span>
              </div>
            </Col>
          </Row>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
