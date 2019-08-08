import React from 'react';
import PropTypes from 'prop-types';
import { styled, keyMirror } from '@diegofrayo/styles';

const Button = ({ children, type, disabled, theme, onClick }) => {
  return (
    <ButtonElement type={type} theme={theme} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

Button.theme = keyMirror(['primary']);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  theme: Button.theme.primary,
  type: 'button',
};

// ----- Components -----

const ButtonElement = styled.button(
  ({ theme, utils, props }) => `
    border-radius: 5px;
    color: white;
    opacity: ${props.disabled ? 0.7 : 1};
    padding: ${theme.space[3]}px ${theme.space[3]}px;
    text-transform: uppercase;
    width: 100%;
    ${utils.switch(props.theme, {
      [Button.theme.primary]: `
        background: rgb(20,170,0);
        background: radial-gradient(circle, rgba(20,170,0,1) 0%, rgba(17,144,0,1) 75%);
      `,
      default: '',
    })}
  `,
);

export default Button;
