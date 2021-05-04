import React from 'react';
import {View, StyleSheet, FlatList, ScrollView, Button} from 'react-native';
import {} from 'react-native-gesture-handler';
import PetItems from './PetItems';

const CardPet = props => {
  const {pet, onPressItem} = props;

  return (
    <FlatList
      style={styles.container}
      data={pet}
      renderItem={({item}) => <PetItems pet={item} onPressItem={onPressItem} />}
      // button
      keyExtractor={(item, index) => item + index}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: '#e9e8e9',
  },
});

export default CardPet;
