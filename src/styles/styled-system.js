// eslint-disable-next-line import/prefer-default-export
export const ellipsis = ({ ellipsis: ellipsisProp }) => {
  if (ellipsisProp) {
    return `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }

  return '';
};
