export default function (state=0, action) {
  switch (action.type) {
    case "STEP_FORWARD":
      return state += 1 ;
    case "STEP_BACKWARDS":
      return state -= 1;
    default:
      return state;
  }
}