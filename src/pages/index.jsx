import React, { Fragment, useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'emotion-theming';
import { css } from '@diegofrayo/styles';

import ErrorBoundary from 'hocs/ErrorBoundary';
import { Router } from 'routing';
import theme from 'styles';

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <Router />
            {APP_SETTINGS.environment === 'development' && <WindowSize />}
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = APP_SETTINGS.environment === 'development' ? AppContainer : Fragment;

// --- Components ---

const WindowSizeStyles = css(`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: white;
  font-weight: bold;
  right: 0;
  padding: 10px;
  position: fixed;
`);

const WindowSize = () => {
  const [[width, height, screenWidth, screenHeight, orientation], setSize] = useState([]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([
        window.innerWidth,
        window.innerHeight,
        window.screen.width,
        window.screen.height,
        window.screen.orientation ? window.screen.orientation.type.substring(0, 4) : '',
      ]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div css={WindowSizeStyles}>
      <span>{`${width} x ${height}|`}</span>
      <span>{`${screenWidth} x ${screenHeight}|`}</span>
      {width < 576 && <span>mobile</span>}
      {width >= 576 && width < 768 && <span>sm</span>}
      {width >= 768 && width < 992 && <span>md</span>}
      {width >= 992 && <span>lg</span>}
      {orientation && <span>{`|${orientation}`}</span>}
    </div>
  );
};

export default App;
