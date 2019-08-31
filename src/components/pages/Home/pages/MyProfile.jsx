import React, { Fragment } from 'react';
import { styled } from '@diegofrayo/styles';
import { Box, Icon, Separator, Text, Title } from 'components/lib';

import { ProfileImage } from '../components';

const MyProfile = () => {
  return (
    <Fragment>
      <Box dir="row" wrap grow-x>
        <Box dir="row" width={[1, 1, 'auto']}>
          <Box p={1} pl="0px">
            <ProfileImage size={100} />
          </Box>
          <Box align-y="center" p={1}>
            <Text color="blue" fontSize={5} mb={0}>
              Diego Rayo
            </Text>
            <Ranking position="25" />
          </Box>
        </Box>
        <Box px={[null, null, 2]} width={[1, 1, 'auto']} dir="row" wrap>
          <Box
            py={1}
            pr={[null, 1]}
            align-y="center"
            align-x="flex-start"
            width={[1, 0.5, 'auto']}
          >
            <StatisticsBox type="co2" value="10.098" text="Recuperado" icon="clouds" />
          </Box>
          <Box
            py={1}
            pl={[null, 1]}
            align-y="center"
            align-x="flex-start"
            width={[1, 0.5, 'auto']}
          >
            <StatisticsBox
              type="carbon"
              value="1.932"
              text="Huella de carbono"
              icon="foot"
            />
          </Box>
        </Box>
      </Box>
      <Separator size={3} />
      <Box>
        <Title>
          <Icon name="award" color="yellows.1" mr={1} />
          <span>Reconocimientos</span>
        </Title>
        <Separator size={1} />
        <Box align-x="flex-start" dir="row" wrap>
          <Award icon="muscle" title="Has reciclado..." />
          <Award icon="check" title="Has reciclado..." />
          <Award icon="rocket" title="Has reciclado..." />
          <Award icon="smile" title="Has reciclado..." />
        </Box>
      </Box>
    </Fragment>
  );
};

// ----- Components -----

const RankingBadge = styled.span(
  ({ theme }) => `
    background-color: ${theme.colors.red};
    border-radius: 40%;
    color: white;
    margin-left: ${theme.space[1]}px;
    padding: ${theme.space[0] / 2}px ${theme.space[1]}px;
  `,
);

// eslint-disable-next-line react/prop-types
const Ranking = ({ position }) => {
  return (
    <Text color="black">
      <span>Ranking</span>
      <RankingBadge>{position}</RankingBadge>
    </Text>
  );
};

const StatisticsBoxContainer = styled(Box)(
  ({ theme, props }) => `
    background-color: ${props.type === 'co2' ? theme.colors.green : 'orange'};
    box-shadow: 2px 0px 5px 0px ${theme.colors.grays[0]};
    color: ${props.type === 'co2' ? 'white' : 'black'};
    width: 100%;
  `,
);

// eslint-disable-next-line react/prop-types
const StatisticsBox = ({ type, icon, value, text }) => {
  return (
    <StatisticsBoxContainer
      align-x="center"
      px={1}
      type={type}
      dir="row"
      width={[1, 1, 250]}
    >
      <Box p={1} align="center">
        <Icon name={icon} size={4} />
      </Box>
      <Box p={1} align-y="center">
        <Text fontSize={4}>{`${value} Kg`}</Text>
        <Text fontSize={3}>{text}</Text>
      </Box>
    </StatisticsBoxContainer>
  );
};

const AwardBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.blue};
    box-shadow: 2px 0px 5px 0px ${theme.colors.grays[0]};
    border-radius: 100%;
    cursor: help;

    .eco-icon {
      font-size: ${theme.fontSizes[5]};
    }

    ${theme.mediaQueries['small-up']} {
      .eco-icon{
        font-size: ${theme.fontSizes[6]};
      }
    }
  `,
);

// eslint-disable-next-line react/prop-types
const Award = ({ icon, title }) => {
  return (
    <AwardBox p={3} mr={3} mb={2} title={title}>
      <Icon name={icon} color="white" />
    </AwardBox>
  );
};

export default MyProfile;
