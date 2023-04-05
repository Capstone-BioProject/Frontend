import { createStore } from 'redux';

import modules from './modules';

// Todo: �̵����
const configureStore = (initialState) => {
    const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
    // hot-reloading �� ���� �ڵ�
    if(module.hot) {
        module.hot.accept('./modules', () => {
            const nextRootReducer = require('./modules').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    
    return store;
}

export default configureStore;