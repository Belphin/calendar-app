import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const Navbar: FC = () => {
	const router = useNavigate();
	const { isAuth } = useTypedSelector((state) => state.auth);
	return (
		<Layout.Header>
			<Row justify="end">
				{isAuth ? (
					<>
						<div style={{ color: "white" }}>User</div>
						<Menu
							theme="dark"
							mode="horizontal"
							selectable={false}
							items={[
								{
									key: 1,
									label: "Logout",
									onClick: () => console.log("Logout"),
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
