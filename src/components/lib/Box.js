import { color, layout, space } from 'styled-system';
import styled from '@emotion/styled';

const flex = ({
  'align-x': alignXProp,
  'align-y': alignYProp,
  align: alignProp,
  dir,
}) => {
  let alignX = '';
  let alignY = '';
  let align = '';
  const display = 'display: flex;';
  const direction = `flex-direction: ${dir || 'column'};`;

  if (alignXProp) {
    alignX = `justify-content: ${alignXProp};`;
  }

  if (alignYProp) {
    alignY = `align-items: ${alignYProp};`;
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

  // console.log({ alignX, alignY, align, direction, display });

  return `
    ${alignX}
    ${alignY}
    ${align}
    ${direction}
    ${display}
  `;
};

const Box = styled.section`
  ${flex}
  ${color}
  ${layout}
  ${space}
`;

export default Box;
