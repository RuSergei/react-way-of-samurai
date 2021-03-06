import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Provider from './StoreContext';
// import StoreContext from './StoreContext';


let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
          // dispatch={store.dispatch.bind(store)}
          />
        </Provider>

      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
  );
};

renderEntireTree(store);

store.subscribe(() => {
  let state = store;
  renderEntireTree(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
