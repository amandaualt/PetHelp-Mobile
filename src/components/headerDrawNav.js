import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function HeaderDrawNav({title, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="bars" size={28} color="#4A4444" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#c3c1d9',
    borderColor: '#4A4444',
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    color: '#4A4444',
    padding: 10,
    fontSize: 30,
  },
  containerTitle: {
    backgroundColor: '#A7A4C0',
    width: '100%',
    justifyContent: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    backgroundColor: '#A7A4C0',
    paddingHorizontal: 10,
  },
});
