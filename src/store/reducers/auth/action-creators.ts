import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import {
	AuthActionEnum,
	SetAuthAction,
	SetErrorAction,
	SetIsLoadingAction,
	SetUserAction,
} from "./types";

export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({
		type: AuthActionEnum.SET_USER,
		payload: user,
	}),
	setAuth: (auth: boolean): SetAuthAction => ({
		type: AuthActionEnum.SET_AUTH,
		payload: auth,
	}),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({
		type: AuthActionEnum.SET_IS_LOADING,
		payload,
	}),
	setError: (payload: string): SetErrorAction => ({
		type: AuthActionEnum.SET_ERROR,
		payload,
	}),
	login:
		(username: string, password: string) => async (dispatch: AppDispatch) => {
			try {
				dispatch(AuthActionCreators.setIsLoading(true));
				const mockUsers = await axios.get("./users.json");
				console.log(mockUsers);
			} catch (e) {
				dispatch(
					AuthActionCreators.setError("An error occurred while logging in")
				);
			}
		},
	logout: () => async (dispatch: AppDispatch) => {
		try {
		} catch (e) {}
	},
};
