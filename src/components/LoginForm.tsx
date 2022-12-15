import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
	const { login } = useActions();
	const { error, isLoading } = useTypedSelector((state) => state.auth);
	const [user, setUser] = useState({ username: "", password: "" });

	const submit = () => {
		login(user.username, user.password);
		setUser({ username: "", password: "" });
	};

	return (
		<Form onFinish={submit}>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<Form.Item
				label="Username"
				name="username"
				rules={[rules.required("Please input your username!")]}>
				<Input
					value={user.username}
					onChange={(e) => {
						setUser({ ...user, username: e.target.value });
					}}
				/>
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[rules.required("Please enter a password!")]}>
				<Input
					type="password"
					value={user.password}
					onChange={(e) => {
						setUser({ ...user, password: e.target.value });
					}}
				/>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
