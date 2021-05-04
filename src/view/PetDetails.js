import React from 'react';
import {View, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import * as data from '../../db.json';
import Line from '../components/LinePet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderDrawNav from '../components/headerDrawNav';
import Btn from '../components/Btn';
import LinkV from '../components/Link';

export default function PetDetails({navigation, route}) {
  const pet = route.params.pet;
  const alertExcluir = () =>
    Alert.alert('Excluir', 'Você deseja mesmo excluir esse Pet?', [
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => console.log('OK Pressed')},
    ]);
  const alertEditar = () =>
    Alert.alert('Editar', 'Você clicou em ditar!!', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={styles.containerG}>
      <HeaderDrawNav title="PetDetails" navigation={navigation} />
      <ScrollView>
        <View style={styles.links}>
          <LinkV
            title="Voltar"
            onPress={() => {
              navigation.navigate('MeusPets');
            }}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.petImage}
            source={{
              uri: pet.imagem.pequena,
            }}
          />
          <View style={styles.containerLabels}>
            <Line
              label={<Icon name="paw" size={28} color="#2F2F2E" />}
              content={pet.nomePet}
            />
            <Line
              label={<Icon name="dragon" size={28} color="#2F2F2E" />}
              content={pet.especiePet}
            />
            <Line
              label={<Icon name="kiwi-bird" size={28} color="#2F2F2E" />}
              content={pet.racaPet}
            />
            <Line
              label={<Icon name="venus-mars" size={28} color="#2F2F2E" />}
              content={pet.sexoPet}
            />
            <Line
              label={<Icon name="birthday-cake" size={28} color="#2F2F2E" />}
              content={pet.idadePet}
            />
            <View style={styles.containerCuid}>
              <Line
                label={<Icon name="clinic-medical" size={28} color="#2F2F2E" />}
                content={pet.cuidadosPet}
              />
              <Line
                label={<Icon name="calendar-plus" size={28} color="#2F2F2E" />}
                content={pet.dataCuidados}
              />
            </View>
          </View>

          <View style={styles.containerButton}>
            <Btn title="Excluir" onPress={alertExcluir} />
            <Btn title="Editar" onPress={alertEditar} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerG: {
    backgroundColor: '#E9E8E9',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  containerLabels: {
    margin: 20,
    width: '90%',
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  containerCuid: {
    marginTop: 22,
    backgroundColor: '#e4dada',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  petImage: {
    width: 200,
    height: 300,
    marginTop: 10,
  },
  links: {
    marginLeft: 20,
  },
});
