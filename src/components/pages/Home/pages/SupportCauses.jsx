import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { createComponentStyles, styled } from '@diegofrayo/styles';

import { Box, Title, Button } from 'components/lib';

const SupportCauses = () => {
  const { current: causes } = useRef([
    {
      id: 1,
      image: '/images/causes/children.jpg',
      title: 'Artesanías con niños',
    },
    {
      id: 2,
      image: '/images/causes/pets.jpg',
      title: 'Comida para perros sin hogar',
    },
  ]);

  return (
    <Container dir="row" wrap="true">
      {causes.map(cause => {
        return <Cause key={cause.id} cause={cause} />;
      })}
    </Container>
  );
};

// --- Components ---

const Container = styled(Box)(
  ({ theme }) => `
    justify-content: center;

    ${theme.mediaQueries.medium} {
      justify-content: flex-start;
    }
  `,
);

const CauseStyles = createComponentStyles(({ theme }) => ({
  box: `
    box-shadow: 2px 2px 5px 0px ${theme.colors.grays[1]};
    border-radius: 10px;
    margin-bottom: ${theme.space[2]}px;
    margin-right: ${theme.space[2]}px;
    max-width: 275px;
    overflow: hidden;
    width: 100%;
  `,
  image: `
    display: block;
    height: 200px;
    width: 100%;
  `,
}));

const Cause = ({ cause }) => {
  return (
    <Box css={CauseStyles.box} mb={3}>
      <img src={cause.image} alt="Cause" css={CauseStyles.image} />
      <Box p={1}>
        <Title is="h3" mb={2} ellipsis>
          {cause.title}
        </Title>
        <Box textAlign="right" no-flex>
          <Button
            size={Button.size.sm}
            theme={Button.theme.secondary}
            css={CauseStyles.button}
            onClick={() => {}}
          >
            Apoyar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Cause.propTypes = {
  cause: PropTypes.object.isRequired,
};

export default SupportCauses;
