export const removeHero = function (id) {
  return {
    type: "REMOVE_HERO",
    id: id
  };
};

export const addHero = function (hero) {
  return {
    type: "ADD_HERO",
    hero: hero
  };
};