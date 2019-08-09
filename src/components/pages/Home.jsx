import React from 'react';

import { Box, Icon, Separator } from 'components/lib';

const Home = function Home() {
  return (
    <Box align="center" dir="row" grow>
      <Icon name="work" />
      <Separator type={Separator.type.vertical} />
      <span>Trabajo en progreso...</span>
    </Box>
  );
};

export default Home;
