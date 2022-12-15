import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
	const router = useNavigate();
	const { isAuth, user } = useTypedSelector((state) => state.auth);
	const { logout } = useActions();

	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div style={{ color: "white" }}>{user.username}</div>
						<Menu
							theme="dark"
							mode="horizontal"
							selectable={false}
							items={[
								{
									key: 1,
									label: "Logout",
									onClick: () => logout(),
								},
							]}
						/>
					</>
				) : (
					<Menu
						theme="dark"
						mode="horizontal"
						selectable={false}
						items={[
							{
								key: 1,
								label: "Login",
								onClick: () => router(RouteNames.LOGIN),
							},
						]}
					/>
				)}
			</Row>
		</Layout.Header>
	);
};

export default Navbar;
