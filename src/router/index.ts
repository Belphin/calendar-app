import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute {
	path: string;
	element: React.ComponentType;
}

export enum RouteNames {
	LOGIN = "*",
	EVENT = "*",
}

export const publicRoutes: IRoute[] = [
	{ path: RouteNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
	{ path: RouteNames.EVENT, element: Event },
];
