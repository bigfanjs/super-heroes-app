import { v4 } from "node-uuid";

var id = 1;

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

export const updateHero = function (id, hero) {
  return {
    type: "UPDATE_HERO",
    id: id,
    hero: hero
  };
};

export const stepForward = function () {
  return {
    type: "STEP_FORWARD"
  };
};

export const stepBackwards = function () {
  return {
    type: "STEP_BACKWARDS"
  };
};

export const addBattle = function () {
  return {
    type: "ADD_BATTLE",
    id: id++
  };
};

export const removeBattle = function () {
  return {
    type: "REMOVE_BATTLE"
  };
};