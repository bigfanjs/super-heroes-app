const initialState = {
  isLoading: false,
  errors: {},
  values: {}
};
const assign = Object.assign;

export default function (state=initialState, action) {
  switch (action.type) {
    case "FORM_UPDATE_VALUE":
      return assign({}, state, {
        values: assign({}, state.values, {[action.name]: action.value})
      });
    case "FORM_UPDATE_ALL_VALUES":
      return assign({}, state, {
        values: assign({}, action.values)
      });
    case "FORM_RESET":
      return state;
    default:
      return state;
  }
}