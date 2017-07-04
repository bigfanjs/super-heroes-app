export default function (state={}, action) {
  switch (action.type) {
    case "FORM_UPDATE_VALUE":
      return Object.assign({}, state, {[action.name]: action.value});
    case "FORM_RESET":
      return state;
    default:
      return state;
  }
}