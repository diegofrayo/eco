import React from 'react';
import PropTypes from 'prop-types';

const ICONS = {
  email: 'email',
  password: 'ui-password',
};

const Icon = ({ name }) => {
  if (!ICONS[name]) {
    return <span>?</span>;
  }

  return <i className={`icofont-${ICONS[name]} icofont-1x`} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
