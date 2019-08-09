import { color, layout, space } from 'styled-system';
import styled from '@emotion/styled';

const flex = ({
  'align-x': alignXProp,
  'align-y': alignYProp,
  'grow-x': growXProp,
  'grow-y': growYProp,
  grow: growProp,
  align: alignProp,
  dir,
}) => {
  let alignX = '';
  let alignY = '';
  let align = '';
  let growX = '';
  let growY = '';
  let grow = '';
  const display = 'display: flex;';
  const direction = `flex-direction: ${dir || 'column'};`;

  if (alignXProp) {
    alignX = `justify-content: ${alignXProp};`;
  }

  if (alignYProp) {
    alignY = `align-items: ${alignYProp};`;
  }

  if (growXProp) {
    growX = `width: 100%;`;
  }

  if (growYProp) {
    growY = `
      flex: 1;
      height: 100%;
    `;
  }

  if (growProp) {
    grow = `
      flex: 1;
      height: 100%;
      width: 100%;
    `;
  }

  if (alignProp === 'center') {
    align = `
      align-items: center;
      justify-content: center;
    `;
  } else if (alignProp === 'left') {
    align = 'justify-content: flex-start;';
  } else if (alignProp === 'right') {
    align = 'justify-content: flex-end';
  }

  return `
    ${alignX}
    ${alignY}
    ${align}
    ${direction}
    ${display}
    ${growX}
    ${growY}
    ${grow}
  `;
};

const Box = styled.section`
  ${flex}
  ${color}
  ${layout}
  ${space}
`;

export default Box;
