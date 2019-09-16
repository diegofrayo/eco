import React from 'react';
import PropTypes from 'prop-types';
import { styled, createComponentStyles } from '@diegofrayo/styles';
import { Link } from 'react-router-dom';
import { Routes } from 'routing';

import { Box, Icon, Text } from 'components/lib';

import { ProfileImage } from './components';
import { LocationEcoAliados, MyProfile } from './pages';

const Home = function Home({ match }) {
  return (
    <Container grow>
      <Header py={3} px={4} dir="row" align-x="space-between">
        <Logo src="/images/logo.png" alt="Logo" />
        <ProfileImage size={50} />
      </Header>
      <Body wrap="true">
        <Navigation>
          <Navigation.Item icon="profile" text="Mi perfil" route={Routes.HOME} />
          <Navigation.Item
            icon="location"
            text="Ubicación de Eco-Aliados"
            route={Routes.LOCATION_ECOALIADOS}
          />
        </Navigation>
        <Content flex={1} p={3}>
          <MainTitle>
            {match.path === Routes.HOME ? 'Mi perfil' : 'Ubicación de Eco-Aliados'}
          </MainTitle>
          {match.path === Routes.HOME ? <MyProfile /> : <LocationEcoAliados />}
        </Content>
      </Body>
    </Container>
  );
};

Home.propTypes = {
  match: PropTypes.object.isRequired,
};

// ----- Components -----

const Container = styled(Box)(
  ({ theme }) => `
    height: 100vh;

    ${theme.mediaQueries.landscape} {
      height: auto;
      overflow: auto;
    }
  `,
);

const Header = styled(Box)(
  () => `
    background: rgb(94,200,255);
    background: linear-gradient(90deg, rgba(94,200,255,1) 0%, rgba(53,186,255,1) 50%, rgba(0,168,255,1) 100%);
  `,
);

const Logo = styled.img(
  () => `
    height: 50px;
    width: 50px;
  `,
);

const Body = styled(Box)(
  ({ theme }) => `
    background-color: white;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;

    ${theme.mediaQueries.landscape} {
      height: auto;
    }

    ${theme.mediaQueries['small-up']} {
      flex-direction: row;
    }
  `,
);

const Navigation = styled(Box)(
  ({ theme }) => `
    box-shadow: 2px 2px 5px 0px ${theme.colors.gray};
    flex-direction: row;
    height: 80px;
    width: 100%;

    ${theme.mediaQueries['small-up']} {
      flex-direction: column;
      height: auto;
      width: auto;
    }
  `,
);

const NavigationItemStyles = createComponentStyles(({ theme }) => ({
  link: `
    border-right: 1px solid ${theme.colors.gray};
    flex: 1;
    height: 100%;
    width: auto;

    ${theme.mediaQueries['small-up']} {
      border-bottom: 1px solid ${theme.colors.gray};
      display: block;
      height: 120px;
      width: 120px;

      &:last-child{
        border-bottom: 0;
      }
    }
  `,
  box: `
    height: 100%;
    text-align: center;
    width: 100%;

    .eco-icon {
      font-size: ${theme.fontSizes[5]};
    }

    .eco-text{
      display: none;
    }

    ${theme.mediaQueries['small-up']} {
      .eco-icon {
        font-size: ${theme.fontSizes[6]};
      }

      .eco-text{
        display: block;
      }
    }
  `,
}));

// eslint-disable-next-line react/prop-types
Navigation.Item = ({ icon, text, route }) => {
  return (
    <Link to={route} css={NavigationItemStyles.link}>
      <Box align="center" p={2} css={NavigationItemStyles.box}>
        <Icon name={icon} color="blues.3" />
        <Text mt={0} color="blue">
          {text}
        </Text>
      </Box>
    </Link>
  );
};

const Content = styled(Box)(
  ({ theme }) => `
    flex: 1;
    height: 100%;
    max-width: 100%;
    overflow: auto;

    ${theme.mediaQueries.landscape} {
      height: auto;
      overflow: unset;
    }
  `,
);

const MainTitle = styled.h1(
  ({ theme }) => `
    border-bottom: 2px dashed ${theme.colors.gray};
    font-size: ${theme.fontSizes[7]};
    margin-bottom: ${theme.space[3]}px;
    padding-bottom: ${theme.space[1]}px;
  `,
);

export default Home;