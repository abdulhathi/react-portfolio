import { BrowserRouter } from "react-router-dom";
import App from '../App';
import { Provider } from 'react-redux';
import { store, persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

const ReactReduxThunk = () => {
  return <Provider store={store}>
  <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </PersistGate>
</Provider>
};

export default ReactReduxThunk;