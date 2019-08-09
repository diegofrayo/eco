import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'components/lib';
import { componentDidMount } from 'services/utils';
import { Routes, redirect } from 'routing';

const Root = function Root({ history }) {
  componentDidMount(() => {
    setTimeout(() => {
      redirect(Routes.SIGN_IN, history);
    }, 1000);
  });

  return (
    <Box align="center" grow>
      <Icon name="loading" />
    </Box>
  );
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Root;
