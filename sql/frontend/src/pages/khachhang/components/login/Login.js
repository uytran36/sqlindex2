import { Form, Input, Button } from "antd";
import "./Login.css";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ setAuth }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  // const callAPI = () => {
  //   //get post put delete
  //   axios
  //     .get("http://localhost:5000/testapi")
  //     .then((res) => console.log(res.data));
  // };

  // callAPI();

  const onFinish = (values) => {
    const info = {
      email: values.email,
      password: values.password,
    };

    setLoginInfo(info);
    window.localStorage.setItem("auth", info.email);
    setAuth(info.email);
    history.push("/");
    // return <Redirect to="/" />;
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
