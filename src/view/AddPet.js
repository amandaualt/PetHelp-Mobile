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
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImgToBase64 from 'react-native-image-base64';

import {savePet, setField, setAllFieds, resetForm} from '../actions';

function AddPet({navigation, route, petForm, setField, savePet}) {
  const [image, setImage] = useState('');
  useEffect(() => {
    resetForm();
  });

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      includeBase64: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setField('img', `data:${image.mime};base64,${image.data}`);
      // setImage(image.path);
      bs.current.snapTo(1);
    });
    // ImgToBase64.getBase64String(volta[0].uri);
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      includeBase64: true,
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setField('img', `data:${image.mime};base64,${image.data}`);
      bs.current.snapTo(1);
    });
    // ImgToBase64.getBase64String(volta[0].uri);
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Foto</Text>
        <Text style={styles.panelSubtitle}>
          Escolha a melhor foto do seu bichinho
        </Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Tirar Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Escolher foto na galeria</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);
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
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Animated.View
          style={{
            margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: petForm.img,
                  }}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
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
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  abc: {
    backgroundColor: '#E9E8E9',
    height: '100%',
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
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    marginBottom: 5,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#D4A8A9',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
const mapStateToProps = state => {
  const {petForm} = state;
  return {petForm};
};

const mapDispatchToProps = {
  setField,
  savePet,
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPet);
