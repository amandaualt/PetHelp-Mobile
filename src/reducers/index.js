import {combineReducers} from 'redux';
import UsuarioReducer from './usuarioReducer';
import petReducer from './petReducer';
import novoPetReducer from './novoPetReducer';

export default combineReducers({
  user: UsuarioReducer,
  petForm: novoPetReducer,
  listaPets: petReducer,
});
