import React from "react";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
	const { isAuth } = useTypedSelector((state) => state.auth);
	return isAuth === true ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={<route.element />} />
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={<route.element />} />
			))}
		</Routes>
	);
};

export default AppRouter;
