import React from 'react';
import PropTypes from 'prop-types';
import { color as colorSS, typography, space } from 'styled-system';
import styled from '@emotion/styled';

const Titles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((result, key) => {
  // eslint-disable-next-line no-param-reassign
  result[key] = styled[key]`
    ${colorSS}
    ${space}
    ${typography}
  `;

  return result;
}, {});

const getFontSize = (fontSize, is) => {
  if (is === 'h1') {
    return fontSize || '2em';
  }

  if (is === 'h2') {
    return fontSize || '1.5em';
  }

  if (is === 'h3') {
    return fontSize || '1.3em';
  }

  if (is === 'h4') {
    return fontSize || '1.1em';
  }

  return fontSize || '1em';
};

const Title = ({ is, children, color, fontSize }) => {
  const Component = Titles[is];
  return (
    <Component color={color} fontSize={getFontSize(fontSize, is)}>
      {children}
    </Component>
  );
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
  is: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

Title.defaultProps = {
  is: 'h1',
  color: 'black',
  fontSize: 0,
};

export default Title;
