import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Line = ( {label, content="-"} ) => {
  return(
    <View style={styles.line}>
      <Text style={[styles.cell, 
                    styles.label
      ]}>{label}</Text>
      <Text style={[styles.cell, styles.content]}>{content}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 2,
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    width: "80%",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cell: {
    paddingLeft: 5,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    flex: 1
  },
  content: {
    flex: 3
  },
  longLabel: {
    fontSize: 12
  }

});

export default Line;