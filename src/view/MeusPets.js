import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import CardPet from '../components/CardPet';
import HeaderDrawNav from '../components/headerDrawNav';
import * as _data from '../../db.json';
import {mostrarPets} from '../actions';
import {connect} from 'react-redux';

function MeusPets({navigation, mostrarPets, pets, listaPets}) {
  useEffect(() => {
    if (pets === null) {
      mostrarPets();
    }
  });
  if (pets === null) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <HeaderDrawNav title="MeusPets" navigation={navigation} />
      <CardPet
        // pet={[]}
        pet={[...pets]}
        // pet={_data.pet}
        onPressItem={({pet}) => {
          navigation.navigate('PetDetails', {pet});
        }}
      />
      <View>
        <TouchableOpacity
          style={styles.containerBtn}
          onPress={() => {
            navigation.navigate('AddPet');
          }}>
          <Text style={styles.containerTxt}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#D4A8A9',
    borderRadius: 50,
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  containerTxt: {
    fontSize: 30,
    color: '#4A4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = state => {
  const {listaPets} = state;

  if (listaPets === null) {
    return {pets: listaPets};
  }
  const keys = Object.keys(listaPets);

  const listaPetsWithId = keys.map(key => {
    return {...listaPets[key], id: key};
  });
  return {pets: listaPetsWithId};
};

export default connect(mapStateToProps, {mostrarPets})(MeusPets);
