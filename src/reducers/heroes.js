export default function (state=[], action) {
  switch (action.type) {
    case "ADD_HERO":
      return [...state, action.hero];
    case "REMOVE_HERO":
      return state.filter((hero) => hero.id === action.id);
    default:
      return state;
  }
}