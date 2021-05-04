import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const Btn = props => {
  const {title, onPress} = props;
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#4A4444',
    fontSize: 20,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#D4A8A9',
    borderRadius: 12,
  },
});

export default Btn;
