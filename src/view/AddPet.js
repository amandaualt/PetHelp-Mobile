import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TextInput,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderDrawNav from '../components/headerDrawNav';
import FormRow from '../components/FormRow';
import Btn from '../components/Btn';
import Link from '../components/Link';

export default function AddPet({navigation, route, props}) {
  const [data, setData] = useState({
    nomePet: '',
    especiePet: '',
    sexoPet: '',
    racaPet: '',
    idadePet: '',
    proced: '',
    dataProc: '',
    checkTextInputChange: false,
    isValidNomePet: true,
    isValidEspeciePet: true,
    isValidSexoPet: true,
    isValidIdadePet: true,
    isValidProced: true,
    isValidDataProc: true,
  });

  function teste(texto, campo, iscampoValid) {
    if (texto >= 1) {
      setData({
        ...data,
        nomePet: text,
        especiePet: text,
        sexoPet: text,
        idadePet: text,
        proced: text,
        dataProc: text,
        racaPet: text,
      });
    }
  }

  const campoInvalido = () => {
    <Text style={styles.erro}>Campo está vazio</Text>;
  };
  const buttonAdd = () =>
    Alert.alert('Adicionar', 'Pet adicionado com sucesso', [
      {
        text: 'ok',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  const AddFoto = () =>
    Alert.alert('AdicionarFoto', 'Pet adicionado com sucesso', [
      {
        text: 'ok',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
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
          <Icon name="cat" size={150} color="#000" />
          <View>
            <Link title="Adicionar Foto" onPress={AddFoto} />
          </View>
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
                  onChangeText={texto =>
                    teste(texto, 'nomePet', 'isValidNomePet')
                  }
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
                  onChangeText={texto =>
                    teste(texto, 'especiePet', 'isValidEspeciePet')
                  }
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
                  // onChangeText={texto =>
                  // }
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
                  onChangeText={texto =>
                    teste(texto, 'sexoPet', 'isValidSexoPet')
                  }
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
                  onChangeText={texto =>
                    teste(texto, 'idadePet', 'isValidIdadePet')
                  }
                />
                {<Text style={styles.erro}>O campo não pode estar vazio</Text>}
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
                    onChangeText={texto =>
                      teste(texto, 'proced', 'isValidProced')
                    }
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
                    placeholder="useless placeholder"
                    // keyboardType="numeric"
                    onChangeText={texto =>
                      teste(texto, 'dataProc', 'isValidDataProc')
                    }
                  />
                </View>
              </FormRow>
            </View>
            <Link title={'+ adicionar evento'} onPress={buttonAddEvent} />
          </View>
          <Btn title="Adicionar Pet" onPress={AddPet} />
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
