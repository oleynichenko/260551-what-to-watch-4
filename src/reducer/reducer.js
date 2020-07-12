import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as movies} from './movies/movies';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MOVIES]: movies,
});
