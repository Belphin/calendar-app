import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
	guests: IUser[];
	events: IEvent[];
}

export enum EventActionEnum {
	SET_GUESTS = "SET_GUSTS",
	SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestsAction {
	type: EventActionEnum.SET_GUESTS;
	payload: IUser[];
}
export interface SetEventsAction {
	type: EventActionEnum.SET_EVENTS;
	payload: IEvent[];
}

export type EventAction = SetGuestsAction | SetEventsAction;
