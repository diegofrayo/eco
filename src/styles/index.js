import './reset.css';
import { setTheme, extendUtils } from '@diegofrayo/styles';
import Color from 'color';

const theme = {
  space: [4, 8, 16, 32, 64, 128, 256, 512],
  color: {
    red: '#ff4b4b',
    green: 'rgb(20, 170, 0)',

    text: {
      primary: 'black',
    },
    button: {
      primary: 'rgb(20, 170, 0)',
    },
    input: {
      normal: '#eaeaea',
      error: '#ff4b4b',
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32],
};

setTheme(theme);

extendUtils({
  lighten: (color, percent) => {
    return Color(color).lighten(percent);
  },
  darken: (color, percent) => {
    return Color(color).darken(percent);
  },
});

export default theme;
