import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRouter = () => {
	const auth = true;
	return auth === true ? (
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
