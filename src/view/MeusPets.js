import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardPet from '../components/CardPet';
import HeaderDrawNav from '../components/headerDrawNav';
import * as _data from '../../db.json';
import Btn from '../components/Btn';

export default function MeusPets({navigation}) {
  return (
    <View style={styles.container}>
      <HeaderDrawNav title="MeusPets" navigation={navigation} />
      <CardPet
        pet={_data.pet}
        onPressItem={({pet}) => {
          navigation.navigate('PetDetails', {pet});
        }}
      />
      <View style={styles.containerBtn}>
        <Btn
          title="+"
          onPress={() => {
            navigation.navigate('AddPet');
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtn: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
});
