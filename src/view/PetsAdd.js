import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderDrawNav from '../components/headerDrawNav';
import FormRow from '../components/FormRow';
import Btn from '../components/Btn';
import Link from '../components/Link';
import {connect} from 'react-redux';

import {savePet, setField, setAllFieds, resetForm} from '../actions';

function AddPet({navigation, route, petForm, setField, savePet}) {
  const [image, setImage] = useState('');

  const AddFoto = () => {
    Alert.alert('AdicionarFoto', 'Pet adicionado com sucesso', [
      {
        text: 'ok',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  const buttonAddEvent = () =>
    Alert.alert(
      'Adicionar mais um evento',
      'Você clicou em adicionar mais um evento',
      [
        {
          text: 'ok',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );

  return (
    <View style={styles.abc}>
      <HeaderDrawNav title="AddPet" navigation={navigation} />
      <ScrollView>
        <View style={styles.links}>
          <Link
            title="< Voltar"
            onPress={() => {
              navigation.navigate('MeusPets');
            }}
          />
        </View>
        <View style={styles.container}>
          {/* <Icon name="cat" size={150} color="#000" /> */}
          {/* <Link title="Adicionar Foto" onPress={AddFoto} /> */}
          <TouchableOpacity
            onPress={() => bs.current.snapTo(0)}></TouchableOpacity>
          <View style={styles.containerLabels}>
            <FormRow>
              <View style={styles.alignLabel}>
                <Icon
                  style={styles.icons}
                  name="paw"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  color="#4a4444"
                  placeholder="Nome do animal*"
                  value={petForm.nomePet}
                  onChangeText={value => setField('nomePet', value)}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alignLabel}>
                <Icon
                  style={styles.icons}
                  name="dragon"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  color="#4a4444"
                  placeholder="Espécie*"
                  value={petForm.especiePet}
                  onChangeText={value => setField('especiePet', value)}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alignLabel}>
                <Icon
                  style={styles.icons}
                  name="kiwi-bird"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  color="#4a4444"
                  placeholder="Raça"
                  value={petForm.racaPet}
                  onChangeText={value => setField('racaPet', value)}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alignLabel}>
                <Icon
                  style={styles.icons}
                  name="venus-mars"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  color="#4a4444"
                  placeholder="Sexo*"
                  value={petForm.sexoPet}
                  onChangeText={value => setField('sexoPet', value)}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alignLabel}>
                <Icon
                  style={styles.icons}
                  name="birthday-cake"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  color="#4a4444"
                  placeholder="Idade*"
                  value={petForm.idadePet}
                  onChangeText={value => setField('idadePet', value)}
                />
              </View>
            </FormRow>
            <View style={styles.containerCuid}>
              <FormRow>
                <View style={styles.alignLabel}>
                  <Icon
                    style={styles.icons}
                    name="clinic-medical"
                    size={28}
                    color="#2F2F2E"
                  />
                  <TextInput
                    placeholderTextColor="#4A4444"
                    color="#4a4444"
                    placeholder="Qual o procedimento?*"
                    value={petForm.cuidadosPet}
                    onChangeText={value => setField('cuidadosPet', value)}
                  />
                </View>
              </FormRow>
              <FormRow>
                <View style={styles.alignLabel}>
                  <Icon
                    style={styles.icons}
                    name="calendar-plus"
                    size={28}
                    color="#2F2F2E"
                  />
                  <TextInput
                    placeholderTextColor="#4A4444"
                    color="#4a4444"
                    placeholder="Data Procedimento"
                    value={petForm.dataCuidados}
                    onChangeText={value => setField('dataCuidados', value)}
                  />
                </View>
              </FormRow>
            </View>
            <Link
              title={'+ adicionar evento'}
              onPress={() => console.log('oi')}
            />
          </View>
          <Btn
            title="Salvar"
            onPress={async () => {
              console.log(petForm, 'Amanda');
              try {
                await savePet(petForm);
                navigation.goBack();
              } catch (error) {
                Alert.alert('Erro', error.message);
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  abc: {
    backgroundColor: '#E9E8E9',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 60,
  },
  containerLabels: {
    width: '90%',
    alignItems: 'center',
  },
  icons: {
    marginRight: 10,
  },
  containerCuid: {
    marginTop: 18,
    backgroundColor: '#e4dada',
    color: '#4A4444',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
  },
  alignLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  links: {
    marginLeft: 20,
  },
});
const mapStateToProps = state => {
  const {petForm} = state;
  return {petForm};
};

const mapDispatchToProps = {
  setField,
  savePet,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPet);
