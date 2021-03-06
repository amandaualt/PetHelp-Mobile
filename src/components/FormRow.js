import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FormRow = props => {
  const {children} = props;

  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    color: '#4A4444',
    height: 50,
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    width: '90%',
  },
});

export default FormRow;
