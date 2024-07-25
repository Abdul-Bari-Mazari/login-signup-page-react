import React from "react";
import { useEffect } from "react";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import { auth, onAuthStateChanged } from "../config/firebase";

const AntLoginForm = ({ loginUser }) => {
  return (
    <>
      <Form
        name="basic"
        style={{
          maxWidth: "100%",
          minWidth: "40%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={loginUser}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              pattern: /^[a-zA-Z0-9.\-_$@*!]{3,30}$/,
              message: "Username shoudn't have space",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
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
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AntLoginForm;
