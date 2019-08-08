import './reset.css';
import { setTheme } from '@diegofrayo/styles';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  color: {
    primary: 'green',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
};

setTheme(theme);

export default theme;
