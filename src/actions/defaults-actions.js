export const CHANGE_DEFAULTS = "room:change_defaults";

export function changeDefaults(adult, children) {
  return {
    type: CHANGE_DEFAULTS,
    payload: {
      adult: adult,
      children: children
    }
  };
}
