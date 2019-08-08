import PropTypes from 'prop-types';
import { styled } from '@diegofrayo/styles';

const TYPE = {
  VERTICAL: 0,
  HORIZONTAL: 1,
};

const Separator = styled.section(
  ({ props, utils }) => `
    display: ${props.type === TYPE.HORIZONTAL ? 'inline-block' : 'block'};
    height: 1px;
    ${utils.if(
      props.type === TYPE.VERTICAL,
      utils.marginY(props.size),
      utils.marginX(props.size),
    )}
  `,
);

Separator.TYPE = TYPE;

Separator.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(Object.values(Separator.TYPE)),
};

Separator.defaultProps = {
  size: 2,
  type: Separator.TYPE.VERTICAL,
};

export default Separator;
