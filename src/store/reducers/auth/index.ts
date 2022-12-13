import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
	isAuth: false,
	error: "",
	isLoading: false,
	user: {} as IUser,
};

export default function authReducer(
	state = initialState,
	action: AuthAction
): AuthState {
	switch (action.type) {
		case AuthActionEnum.SET_AUTH:
			return { ...state, isAuth: action.payload, isLoading: false };
		case AuthActionEnum.SET_USER:
			return { ...state, user: action.payload };
		case AuthActionEnum.SET_ERROR:
			return { ...state, error: action.payload, isLoading: false };
		case AuthActionEnum.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
}
