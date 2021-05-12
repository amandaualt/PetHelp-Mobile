import firebase from '../config/firebaseConfig';
import {Alert} from 'react-native';
import 'firebase/auth';

export const SET_PETS = 'SET_PETS';

const setPets = pets => ({
  type: SET_PETS,
  pets: pets,
});

export const mostrarPets = () => {
  console.log(`petActions::mostrarPets()`);

  const {currentUser} = firebase.auth();

  return async dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/pets`)
      .on('value', snapshot => {
        const pets = snapshot.val();
        const action = setPets(pets);
        dispatch(action);
      });
  };
};

export const deletePet = pet => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Excluir',
        `Tem certeza que deseja excluir ${pet.nome}`,
        [
          {
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
          },
          {
            text: 'Sim',
            onPress: async () => {
              const {currentUser} = firebase.auth();
              try {
                await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/pets/${pet.id}`)
                  .remove();
                resolve(true);
              } catch (e) {
                reject(e);
              }
            },
          },
        ],
        {cancelable: false},
      );
    });
  };
};
