import React from 'react';
import PropTypes from 'prop-types';
import UtilsService from 'services/utils';

const ICONS = {
  email: 'email',
  password: 'ui-password',
  work: 'worker',
};

const Icon = ({ name, size }) => {
  if (name === 'loading') {
    return <img src="/images/loader.svg" alt="Loading..." />;
  }

  if (!ICONS[name]) {
    return <span>?</span>;
  }

  return <i className={`icofont-${ICONS[name]} icofont-${size}x`} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(UtilsService.createArray(5, 1)),
};

Icon.defaultProps = {
  size: 1,
};

export default Icon;
