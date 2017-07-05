export const loadState = function () {
  try {
    const serializedState = localStorage.getItem("heroes");
    if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = function (state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("heroes", serializedState);
  } catch (err) {
    // something went wrong!
  }
};