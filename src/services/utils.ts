import * as React from 'react';

const API = {
  createArray(length: number, start: number = 0) {
    return Array.from(Array(length).keys()).map(value => value + start);
  },
};

export const componentDidMount = (callback: React.EffectCallback) => {
  return React.useEffect(callback, []);
};

export default API;
