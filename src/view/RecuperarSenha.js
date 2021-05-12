import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import Btn from '../components/Btn';

import FormRow from '../components/FormRow';
import Link from '../components/Link';

export default function RecuperarSenha({navigation}) {
  var auth = firebase.auth();
  var emailAddress = 'user@example.com';

  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });

  const [data, setData] = useState({
    email: '',
  });
  const button = () =>
    Alert.alert('Adicionar', 'Pet adicionado com sucesso', [
      {
        text: 'ok',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  const textInputChange = text => {
    setData({
      ...data,
      email: text,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text1}>Recuperar Senha</Text>
        <Text style={styles.text2}>
          Esqueceu sua senha? Não tem problema te mandaremos um e-mail para
          recupera-la.
        </Text>
      </View>
      <FormRow>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#4A4444"
          placeholder="E-mail: user@usuario.com"
          onChangeText={text => textInputChange(text)}
          secureTextEntry={false}
        />
      </FormRow>

      <Btn style={styles.button} title="Recuperar Senha" onPress={button} />
      <Link
        title="Voltar"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#E8E8E9',
  },
  TextInput: {
    color: '#4A4444',
  },
  text1: {
    fontSize: 55,
    marginBottom: 40,
    textAlign: 'center',
  },
  text2: {
    fontSize: 18,
    marginBottom: 60,
    textAlign: 'center',
  },
  containerText: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 50,
  },
});
