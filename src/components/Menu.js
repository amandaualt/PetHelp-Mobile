import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../view/Home';
import AddPet from '../view/AddPet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from '../config/firebaseConfig';
import 'firebase/auth';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator
      initialRouteName="Meus Pets"
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{labelStyle: {color: '#4A4444', fontSize: 18}}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: config => <Icon name="bug" size={30} color="#4A4444" />,
        }}
      />
      <Drawer.Screen
        name="AddPet"
        component={AddPet}
        options={{
          drawerIcon: config => <Icon name="bug" size={30} color="#4A4444" />,
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  function sair() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log('deu ruim');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`errorMessage: ${errorMessage}`);
      });
  }
  return (
    <DrawerContentScrollView {...props}>
      <ProfileDrawer {...props} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => sair()}
        labelStyle={{color: '#4A4444', fontSize: 18}}
        icon={() => <Icon name="sign-out-alt" size={30} color="#4A4444" />}
      />
    </DrawerContentScrollView>
  );
}

function ProfileDrawer(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('MeusPets');
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://static.wikia.nocookie.net/powerpuff/images/7/74/Textura_sabriiileditions-d45v2se.png/revision/latest/scale-to-width-down/340?cb=20130323203330&path-prefix=pt-br',
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.drawerText}>Florzinha</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 26,
    borderWidth: 1,
    borderColor: '#DDD',
    elevation: 6,
  },
  containerText: {
    alignItems: 'center',
  },
  drawerTextSmall: {
    color: '#fff',
    fontSize: 12,
  },
  drawerText: {
    color: '#4A4444',
    fontSize: 18,
    paddingTop: 6,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  drawerStyle: {
    width: 250,
    backgroundColor: '#A7A4C0',
  },
  container: {
    alignItems: 'center',
    height: 165,
  },
});
