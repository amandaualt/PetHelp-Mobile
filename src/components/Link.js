import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const Link = props => {
  const {title, onPress} = props;
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.linkText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {},
  linkText: {
    color: '#4A4444',
    fontSize: 18,
    fontStyle: 'italic',
    elevation: 1,
    marginBottom: 20,
    marginTop: 30,
  },
});

export default Link;
