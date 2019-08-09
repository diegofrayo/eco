import 'styles';

import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'pages';
import { createStyles } from '@diegofrayo/styles';

const styles = createStyles(() => ({
  'background-color': 'white',
  display: 'flex',
  flex: 1,
  height: '100vh',
}));

const target = document.getElementById('root');
target.setAttribute(
  'style',
  Object.keys(styles)
    .map(key => `${key}:${styles[key]}`)
    .join(';'),
);

ReactDOM.render(<Root />, target);

export default hot(Root);
