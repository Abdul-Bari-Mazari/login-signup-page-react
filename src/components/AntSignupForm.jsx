import { Button, Checkbox, Form, Input } from "antd";

const AntSignupForm = ({ createUser }) => {
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
        onFinish={createUser}
        autoComplete="off"
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              pattern: /^\S+$/,
              message: "Username can't have spaces",
            },
            {
              pattern: /^.{3,30}$/,
              message: "Username length can be 3-30",
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

export default AntSignupForm;
