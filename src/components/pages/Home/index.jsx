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
    <Box align="center" grow>
      <Header py={3} px={4} dir="row" align-x="space-between" grow-x>
        <Logo src="/images/logo.png" alt="Logo" />
        <ProfileImage size={50} />
      </Header>
      <Body align-x="space-between" wrap grow>
        <LeftMenu grow-y>
          <LeftMenu.Item icon="profile" text="Mi perfil" route={Routes.HOME} />
          <LeftMenu.Item
            icon="location"
            text="Ubicación de Eco-Aliados"
            route={Routes.LOCATION_ECOALIADOS}
          />
        </LeftMenu>
        <Content flex={1} p={3}>
          <MainTitle>
            {match.path === Routes.HOME ? 'Mi perfil' : 'Ubicación de Eco-Aliados'}
          </MainTitle>
          {match.path === Routes.HOME ? <MyProfile /> : <LocationEcoAliados />}
        </Content>
      </Body>
    </Box>
  );
};

Home.propTypes = {
  match: PropTypes.object.isRequired,
};

// ----- Components -----

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
    flex-direction: row;

    ${theme.mediaQueries.small} {
      flex-direction: column;
    }
  `,
);

const LeftMenu = styled(Box)(
  ({ theme }) => `
    box-shadow: 2px 2px 5px 0px ${theme.colors.gray};

    ${theme.mediaQueries.small} {
      flex-direction: row;
      height: 80px;
      width: 100%;
    }
  `,
);

const LeftMenuItemStyles = createComponentStyles(({ theme }) => ({
  link: `
    border-bottom: 1px solid ${theme.colors.gray};
    display: block;
    height: 120px;
    width: 120px;

    ${theme.mediaQueries.small} {
      border-right: 1px solid ${theme.colors.gray};
      flex: 1;
      height: 100%;
      width: auto;
    }
  `,
  box: `
    height: 100%;
    text-align: center;
    width: 100%;

    .eco-icon {
      font-size: ${theme.fontSizes[6]};
    }

    ${theme.mediaQueries.small} {
      .eco-icon {
        font-size: ${theme.fontSizes[5]};
      }

      .eco-text{
        display: none;
      }
    }
  `,
}));

// eslint-disable-next-line react/prop-types
LeftMenu.Item = ({ icon, text, route }) => {
  return (
    <Link to={route} css={LeftMenuItemStyles.link}>
      <Box align="center" p={2} css={LeftMenuItemStyles.box}>
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
    overflow: auto;

    ${theme.mediaQueries.small} {
      height: auto;
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
