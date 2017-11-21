import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/headerStyle';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

Header.propTypes = ({
  title: PropTypes.string,
});

Header.defaultProps = {
  title: 'Header title',
};

export default Header;
