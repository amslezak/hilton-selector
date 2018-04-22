import roomReducer from "./room-reducer"
import defaultsReducer from "./defaults-reducer"

import { combineReducers } from "redux"

const allReducers = combineReducers({
  defaults: defaultsReducer,
  room: roomReducer
})

export default allReducers
