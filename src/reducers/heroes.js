export default function (state=[], action) {
  switch (action.type) {
    case "ADD_HERO":
      return [...state, action.hero];
    case "UPDATE_HERO":
      return state.map((hero) => {
        if (hero.id === action.id) {
          return Object.assign({}, hero, action.hero);
        }
        return hero;
      });
    case "REMOVE_HERO":
      return state.filter((hero) => hero.id === action.id);
    default:
      return state;
  }
}