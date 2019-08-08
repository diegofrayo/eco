const API = {
  createArray(length, start = 0) {
    return Array.from(Array(length).keys()).map(value => value + start);
  },
};

export default API;
