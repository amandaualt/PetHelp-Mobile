import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import FormRow from '../components/FormRow';
import Btn from '../components/Btn';
import Link from '../components/Link';
import 'firebase/auth';
import {processLogin} from '../actions';
import {connect} from 'react-redux';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function autenticar() {
    props
      .processLogin({email, password})
      .then(user => {
        if (user) {
          props.navigation.replace('Menu');
          console.log('deu certo');
        } else {
          // isLoading: false;
          console.log('deu cero');
        }
      })
      .catch(error => {
        console.log(error);
        console.log('deu ruim');
      });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImg}
        source={require('../../assets/imgLogin.jpg')}
      />
      <FormRow>
        <TextInput
          placeholder="E-mail: usuario@usuario.com"
          onChangeText={email => setEmail(email)}
          value={email}
          placeholderTextColor="#4A4444"
          color="#4A4444"
        />
      </FormRow>
      <FormRow>
        <TextInput
          placeholderTextColor="#4A4444"
          color="#4A4444"
          placeholder="Senha: 123456"
          secureTextEntry
          keyboardType="numeric"
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </FormRow>
      <Btn
        title="Fazer Login"
        onPress={() => autenticar()}
        // onPress={() => {
        //   props.navigation.navigate('Menu');
        // }}
      />
      <View style={styles.containerLink}>
        <Link
          title="Recuperar senha"
          onPress={() => {
            props.navigation.navigate('RecuperarSenha');
          }}
        />
      </View>
      <View style={styles.containerLink1}>
        <Link
          title="Cadastrar-se"
          onPress={() => {
            props.navigation.navigate('CadastrarPessoas');
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#E9E8E9',
  },
  containerImg: {
    borderRadius: 12,
    marginBottom: 60,
    marginTop: 100,
  },
  containerLink: {
    marginLeft: 230,
  },
  containerLink1: {
    marginLeft: 260,
  },
});

export default connect(null, {processLogin})(Login);
