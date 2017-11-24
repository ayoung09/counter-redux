import { createStore } from 'redux';
import reducer from './modules/counter.module';

const store = createStore(reducer);

export default store;