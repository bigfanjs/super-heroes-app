import { v4 } from "node-uuid";

export const removeHero = function (id) {
  return {
    type: "REMOVE_HERO",
    id: id
  };
};

export const addHero = function (hero) {
  return {
    type: "ADD_HERO",
    hero: Object.assign({}, hero, {id: v4()})
  };
};

export const updateValue = function (name, value) {
  return {
    type: "FORM_UPDATE_VALUE",
    name: name,
    value: value
  };
};

export const resetValues = function () {
  return {
    type: "FORM_RESET"
  };
};