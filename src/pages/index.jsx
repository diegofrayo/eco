import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'emotion-theming';
import { styled } from '@diegofrayo/styles';

import ErrorBoundary from 'hocs/ErrorBoundary';
import { Router } from 'routing';
import theme from 'styles';

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <MainContainer>
              <Router />
            </MainContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = APP_SETTINGS.environment === 'development' ? AppContainer : Fragment;

const MainContainer = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
`;

export default App;