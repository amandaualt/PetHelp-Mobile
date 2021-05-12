import firebase from '../config/firebaseConfig';
import 'firebase/auth';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const PET_SAVED_SUCCESS = 'PET_SAVED_SUCCESS';
export const petSavedSuccess = () => {
  return {
    type: PET_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFieds = pet => ({
  type: SET_ALL_FIELDS,
  pet: pet,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const savePet = pet => {
  const {currentUser} = firebase.auth();
  console.log(`savePet:: currentUser: ${currentUser.uid}`);
  // await firebase.database().ref(`/users/${currentUser.uid}/pets`).push(pet);
  // console.log(`savePet::firebase.database()...`);

  // if (pet.id) {
  //   console.log(`savePet:: update pet to user ${currentUser.uid}`);
  //   await firebase
  //     .database()
  //     .ref(`/users/${currentUser.uid}/pets/${pet.id}`)
  //     .set(pet);
  // } else {
  //   console.log(`savePet:: create new pet to user ${currentUser.uid}`);
  //   await firebase.database().ref(`/users/${currentUser.uid}/pets`).push(pet);
  // }
  return async dispatch => {
    console.log(` return async dispatch ...`);
    if (pet.id) {
      console.log(`savePet:: update pet to user ${currentUser.uid}`);
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/pets/${pet.id}`)
        .set(pet);
    } else {
      console.log(`savePet:: create pet to user ${currentUser.uid}`);
      await firebase.database().ref(`/users/${currentUser.uid}/pets`).push(pet);
    }
    dispatch(petSavedSuccess());
  };
};
