import React from 'react';
import PropTypes from 'prop-types';
import { styled, keyMirror } from '@diegofrayo/styles';

import { Icon } from 'components/lib';

const Button = ({ children, type, disabled, theme, loading, block, size, onClick }) => {
  return (
    <ButtonElement
      type={type}
      disabled={disabled}
      theme={theme}
      loading={`${loading}`}
      block={block}
      size={size}
      onClick={onClick}
    >
      {loading ? <Icon name="loading" /> : children}
    </ButtonElement>
  );
};

Button.theme = keyMirror(['primary', 'secondary']);
Button.size = keyMirror(['sm', 'md', 'lg']);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,

  block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  block: false,
  disabled: false,
  loading: false,
  size: 'lg',
  theme: Button.theme.primary,
  type: 'button',
};

// ----- Components -----

const ButtonElement = styled.button(
  ({ theme, utils, props }) => `
    border-radius: 5px;
    opacity: ${props.disabled ? 0.7 : 1};
    text-transform: uppercase;
    transition: all 0.8s;

    &:hover {
      opacity: 0.7;
    }

    ${utils.switch(props.size, {
      [Button.size.sm]: `
        padding: ${theme.space[0]}px ${theme.space[2]}px;
      `,
      [Button.size.md]: `
        padding: ${theme.space[1]}px ${theme.space[2]}px;
      `,
      [Button.size.lg]: `
        padding: ${theme.space[2]}px ${theme.space[2]}px;
      `,
      default: '',
    })}

    ${utils.switch(props.theme, {
      [Button.theme.primary]: `
        background: ${theme.colors.green};
        background: radial-gradient(circle, ${theme.colors.green} 0%, ${utils.lighten(
        theme.colors.green,
        0.1,
      )} 75%);
        color: white;
      `,
      [Button.theme.secondary]: `
        background: ${theme.colors.blue};
        background: radial-gradient(circle, ${theme.colors.blue} 0%, ${utils.lighten(
        theme.colors.blue,
        0.1,
      )} 75%);
        color: white;
      `,
      default: '',
    })}

    ${utils.if(props.block === true, {
      true: `
        display: block;
        width: 100%;
      `,
      false: ``,
    })}

    ${utils.if(props.loading === 'true', {
      true: `
        cursor: progress;
        transform: translateY(4px);
      `,
      false: `
        cursor: pointer;
      `,
    })}
  `,
);

export default Button;
