import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import saga from './saga';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import ja from 'react-intl/locale-data/ja';
import es from 'react-intl/locale-data/es';
import zh from 'react-intl/locale-data/zh';
import vi from 'react-intl/locale-data/vi';

addLocaleData(en);
addLocaleData(ru);
addLocaleData(ja);
addLocaleData(es);
addLocaleData(zh);
addLocaleData(vi);




const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, thunk);

const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(saga);

export default store;
