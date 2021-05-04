import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FormRow from '../components/FormRow';
import Btn from '../components/Btn';
import Link from '../components/Link';

export default function CadastrarPessoas({navigation}) {
  const [text, setText] = useState('');
  const [date, setDatet] = useState('');

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
  return (
    <View style={styles.abc}>
      <ScrollView>
        <View style={styles.links}>
          <Link
            title="< Voltar"
            onPress={() => {
              navigation.popToTop();
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.containerText}>
            <Text style={styles.tituloH1}>Criar Conta</Text>
            <Text style={styles.subtituloH2}>
              Entre nessa comunidade e não esqueça as datas mais importantes
              para o seu bichinho.
            </Text>
          </View>
          <Icon name="user" size={150} color="#000" />
          <View>
            <Link title="Adicionar Foto" onPress={AddFoto} />
          </View>
          <View style={styles.containerLabels}>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="user"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  placeholder="Digite seu nome*"
                  onChangeText={valor => {
                    setText('email', valor);
                  }}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="mobile-alt"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  placeholder="Telefone"
                  onChangeText={valor => {
                    setText('email', valor);
                  }}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="birthday-cake"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  placeholder="Data de nascimento*"
                  onChangeText={valor => {
                    setText('email', valor);
                  }}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="venus-mars"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  placeholder="Genêro*"
                  onChangeText={valor => {
                    setText('email', valor);
                  }}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="at"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  placeholder="email*"
                  onChangeText={valor => {
                    setText('email', valor);
                  }}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="unlock-alt"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  placeholder="Senha*"
                  onChangeText={valor => {
                    setText('email', valor);
                  }}
                />
              </View>
            </FormRow>
            <FormRow>
              <View style={styles.alingInput}>
                <Icon
                  style={styles.icons}
                  name="unlock-alt"
                  size={28}
                  color="#2F2F2E"
                />
                <TextInput
                  placeholderTextColor="#4A4444"
                  value={date}
                  placeholder="Confirmação de Senha"
                  keyboardType="numeric"
                  onChangeText={valor => {
                    this.onChangeHandler('data', valor);
                  }}
                />
              </View>
            </FormRow>
          </View>
          <Btn title="Criar Cadastro" onPress={buttonAdd} />
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
  },
  containerLabels: {
    width: '90%',
    alignItems: 'center',
  },
  tituloH1: {
    fontSize: 55,
    marginBottom: 20,
    alignItems: 'center',
    color: '#4A4444',
  },
  subtituloH2: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: '#4A4444',
    textAlign: 'center',
  },
  containerText: {
    alignItems: 'center',
    marginBottom: 50,
  },
  alingInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  links: {
    marginLeft: 20,
  },
  icons: {
    marginRight: 10,
  },
});
