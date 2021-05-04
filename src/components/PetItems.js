import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Btn from './Btn';

const PetItems = props => {
  const {pet, onPressItem} = props;
  // const {pequena} = pet.imagem;
  return (
    <View style={styles.container}>
      <Image
        style={styles.petImage}
        source={{
          uri: pet.imagem.pequena,
        }}
        // source={require(`./assets/${pet.imagem.grande}`)}
      />
      <Text style={styles.containerNome}>{pet.nomePet}</Text>
      <View style={styles.teste}>
        <Text style={styles.containerEspec}>{pet.especiePet}</Text>
        <Text style={styles.containerRaca}>{pet.racaPet}</Text>
      </View>
      <View style={styles.containerButton}>
        <Btn
          title="Detalhes"
          onPress={() => {
            onPressItem({pet});
          }}
        />
      </View>
      {/* <Button color="#D4A8A9" style={styles.containerButton} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0DFDF',
    margin: 20,
    height: 200,
    width: '90%',
    padding: 20,
    flexWrap: 'wrap',
  },
  containerNome: {
    marginLeft: 40,
    fontSize: 30,
  },
  teste: {
    marginLeft: 42,
    height: 60,
    flexDirection: 'row',
    marginTop: 10,
  },
  containerEspec: {
    fontSize: 18,
  },
  containerRaca: {
    fontSize: 18,
    marginLeft: 20,
  },
  petImage: {
    width: 100,
    height: '100%',
  },
  containerButton: {
    flex: 2,
    // marginBottom: 40,
    marginTop: -35,
    marginLeft: 30,
  },
});

export default PetItems;
