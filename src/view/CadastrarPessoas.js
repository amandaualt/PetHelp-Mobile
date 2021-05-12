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
import firebase from '../config/firebaseConfig';
import 'firebase/auth';

export default function CadastrarPessoas({navigation}) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();

  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();

  function cadastrar() {
    setCarregando(1);
    setMsgTipo(null);

    if (!email || !senha || !nome) {
      setMsgTipo('erro');
      setMsg('Você não preencheu todos os campos!');
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(resultado => {
        setCarregando(0);
        setMsgTipo('ok');
      })
      .catch(erro => {
        setMsgTipo('erro');
        setCarregando(0);
        switch (erro.message) {
          case 'Password should be at least 6 characteres.':
            setMsg('A senha deve ter pelo menos 6 caracteres');
            break;
          case 'The email address is already in use by another account.':
            setMsg('Esse e-mail ja está sendo utilizado');
            break;
          case 'The email address is badly formatted.':
            setMsg('O formato de e-mail é invalido');
            break;
          case setNome == null:
            setMsg('Campo nome vazio');
            break;
          default:
            setMsg('Não foi possivel cadastrar, Por favor tente mais tarde.');
            break;
        }
      });
  }
  const buttonAdd = () =>
    Alert.alert('Adicionar', 'Pet adicionado com sucesso', [
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
          <View>{/* <Link title="Adicionar Foto" onPress={AddFoto} /> */}</View>
          <View style={styles.containerLabels}>
            {/* <FormRow>
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
                  onChange={e => setNome(e.target.value)}
                  color="#2F2F2E"
                />
              </View>
            </FormRow> */}
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
                  onChange={e => setEmail(e)}
                  color="#2F2F2E"
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
                  color="#2F2F2E"
                  placeholderTextColor="#4A4444"
                  placeholder="Senha*"
                  secureTextEntry
                  keyboardType="numeric"
                  onChange={e => setSenha(e.target.value)}
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
                  // value={date}
                  secureTextEntry
                  placeholder="Confirmação de Senha"
                  keyboardType="numeric"
                  onChange={e => setSenha(e.target.value)}
                  color="#2F2F2E"
                />
              </View>
            </FormRow>
          </View>
          <Btn title="Criar Cadastro" onPress={cadastrar} />
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
