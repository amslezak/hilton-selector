import {
  TOGGLE_ROOM,
  UPDATE_ADULT,
  UPDATE_CHILDREN
} from "../actions/room-actions"

const rooms = [
  {
    enabled: true,
    adult: 1,
    children: 0
  },
  {
    enabled: false,
    adult: 1,
    children: 0
  },
  {
    enabled: false,
    adult: 1,
    children: 0
  },
  {
    enabled: false,
    adult: 1,
    children: 0
  }
]

const roomReducer = (state = rooms, { type, id, enabled, defaults, count }) => {
  let newState = [...state]

  switch (type) {
    case TOGGLE_ROOM:
      newState.map((room, index) => {
        if ((index <= id - 1 && enabled) || index === 0) {
          room.adult = newState[0].adult
          room.children = newState[0].children
          return (room.enabled = true)
        }
        room.enabled = false
        room.adult = defaults.adult
        return (room.children = defaults.children)
      })
      return newState
    case UPDATE_ADULT:
      newState[id - 1].adult = parseInt(count, 10)
      return newState
    case UPDATE_CHILDREN:
      newState[id - 1].children = parseInt(count, 10)
      return newState
    default:
      return state
  }
}

export default roomReducer
