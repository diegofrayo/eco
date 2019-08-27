import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'components/lib';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  componentDidCatch(error, info) {
    console.group('componentDidCatch');
    console.error('error');
    console.log(error);
    console.error('info');
    console.log(info);
    console.groupEnd('componentDidCatch');
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <Box align="center" grow>
          <Text>{error}</Text>
        </Box>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default ErrorBoundary;
