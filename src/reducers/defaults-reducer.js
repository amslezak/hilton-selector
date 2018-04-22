import { CHANGE_DEFAULTS } from "../actions/defaults-actions";

const defaults = {
  adult: 1,
  children: 0
};

export default function defaultsReducer(state = defaults, action) {
  switch (action.type) {
    case CHANGE_DEFAULTS:
      return state;
    default:
      return state;
  }
}
