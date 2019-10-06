import React from 'react';
import { styled } from '@diegofrayo/styles';

import { Box } from 'components/lib';

const ProfileImageElement = styled.img(
  () => `
    height: 100%;
    width: 100%;
  `,
);

// eslint-disable-next-line react/prop-types,import/prefer-default-export
export const ProfileImage = ({ size }) => {
  return (
    <Box size={size} borderRadius="100%">
      <ProfileImageElement src="/images/profile.png" alt="Profile Picture" size={size} />
    </Box>
  );
};
