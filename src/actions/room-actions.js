export const TOGGLE_ROOM = "room:toggle_room"
export const UPDATE_ADULT = "room:update_adult"
export const UPDATE_CHILDREN = "room:update_children"

export function updateAdult(id, count) {
  return { type: UPDATE_ADULT, id, count }
}

export function updateChildren(id, count) {
  console.log(id, count)
  return { type: UPDATE_CHILDREN, id, count }
}

export function toggleRoom(id, enabled, defaults) {
  return {
    type: TOGGLE_ROOM,
    id,
    enabled,
    defaults
  }
}
