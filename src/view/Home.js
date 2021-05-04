import React from 'react';
import * as _data from '../../db.json';
import {createStackNavigator} from '@react-navigation/stack';
import PetDetails from '../view/PetDetails';
import MeusPets from '../view/MeusPets';

const Stack = createStackNavigator();

export default function Home({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MeusPets"
        component={MeusPets}
        navigation={navigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PetDetails"
        component={PetDetails}
        navigation={navigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
