import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import styles from './styles';

function ActionButton({text, action, styleOverride, children}) {
  const content = !children ? text : children;

  return (
    <button style={[styles.baseAction, styleOverride]} onClick={action}>{content}</button>
  );
}

ActionButton.propTypes = {
  text: PropTypes.string,
  styleOverride: PropTypes.object,
  children: PropTypes.element,
  action: PropTypes.func.isRequired
};

export default radium(ActionButton);
