import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
	const { login } = useActions();

	const submit = () => {
		login("", "");
	};

	return (
		<Form onFinish={submit}>
			<Form.Item
				label="Username"
				name="username"
				rules={[rules.required("Please input your username!")]}>
				<Input />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[rules.required("Please enter a password!")]}>
				<Input type="password" />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
