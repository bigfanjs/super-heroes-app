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

export const updateValue = function (name, value) {
  return {
    type: "FORM_UPDATE_VALUE",
    name: name,
    value: value
  };
};

export const resetValue = function () {
  return {
    type: "FORM_RESET"
  };
};