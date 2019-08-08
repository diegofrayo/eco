import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@diegofrayo/styles';

import Box from 'components/lib/Box';
import Icon from 'components/lib/Icon';

const Input = ({ htmlAttrs, label, icon, error, onChange }) => {
  return (
    <Container>
      <label htmlFor={htmlAttrs.id}>
        <Label>{`${label} ${htmlAttrs.required !== undefined ? '*' : ''}`}</Label>
        <InputContainer align-x="left" align-y="center" dir="row">
          <IconContainer align="center" visible={icon !== ''}>
            <Icon name={icon} />
          </IconContainer>
          <InputElement onChange={onChange} {...htmlAttrs} />
        </InputContainer>
      </label>
      <ErrorMessage visible={!!error}>{error}</ErrorMessage>
    </Container>
  );
};

Input.propTypes = {
  htmlAttrs: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  icon: '',
  error: '',
};

// ----- Components -----

const Container = styled.section(
  () => `
    width: 100%;
  `,
);

const Label = styled.p(
  ({ theme }) => `
    color: black;
    font-weight: 700;
    margin-bottom: ${theme.space[1]}px;
  `,
);

const InputContainer = styled(Box)(
  () => `
    background-color: #eaeaea;
    border-radius: 5px;
    border: 1px solid gray;
    overflow: hidden;
    width: 100%;
  `,
);

const IconContainer = styled(Box)(
  ({ theme, props }) => `
    border-right: 1px solid gray;
    display: ${props.visible ? 'inline-flex' : 'none'};
    flex-shrink: 0;
    height: 40px;
    padding: 0 ${theme.space[2]}px;
  `,
);

const InputElement = styled.input(
  ({ theme }) => `
    border: 0;
    height: 40px;
    padding: ${theme.space[1]}px ${theme.space[3]}px;
    width: 100%;
  `,
);

const ErrorMessage = styled.p(
  ({ props }) => `
    color: red;
    display: ${props.visible ? 'block' : 'none'};
  `,
);

export default Input;
