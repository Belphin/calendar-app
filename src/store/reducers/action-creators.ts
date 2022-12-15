import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creators";

export default { ...AuthActionCreators, ...EventActionCreators };
