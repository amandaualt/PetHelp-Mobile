import React, {useState, useEffect} from 'react';
import {View, Image, TextInput, StyleSheet, Text} from 'react-native';
import FormRow from '../components/FormRow';
import Btn from '../components/Btn';
import Link from '../components/Link';
import useDispatch from 'react-redux';
import {firebase} from 'firebase';

export default function Login(props) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyA6TSYfrgR76kO0MHzKiyMaai9JNnDEYsc',
      authDomain: 'pethelp-cf322.firebaseapp.com',
      databaseURL: 'https://pethelp-cf322.firebaseio.com',
      projectId: 'pethelp-cf322',
      storageBucket: 'pethelp-cf322.appspot.com',
      messagingSenderId: '545358057241',
      appId: '1:545358057241:web:ae39a79e642d55cc0cbf88',
    };
    firebase.initializeApp(firebaseConfig);
  });

  function autenticar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(resultado => {
        console.log('ok');
        setTimeout(() => {
          dispatch({type: 'LOGIN', usuarioEmail: email});
        }, 2000);
      })
      .catch(erro => {
        setMsgTipo('erro');
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
          onChange={e => setEmail(e.target.value)}
          // value={setEmail}
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
          // value={setSenha}
          onChange={e => setSenha(e.target.value)}
        />
      </FormRow>
      <View style={styles.containerLink}>
        <Link
          title="Recuperar senha"
          onPress={() => {
            props.navigation.navigate('RecuperarSenha');
          }}
        />
      </View>
      <Btn
        title="Fazer Login"
        // onPress={() => autenticar}
        onPress={() => {
          props.navigation.navigate('Menu');
        }}
      />
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
