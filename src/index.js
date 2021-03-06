import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

// import App from './test2-meme/App';

// import App from './test3-Todos/App';

import App from './test4-redux/App';

// import App from './test5-redux/App';
// import store from "./test5-redux/redux";

// import App from './test6-refs/App';

// import App from './test7-refs/App';

// import App from './test8-redux-useselector/App';
// import store from "./test8-redux-useselector/redux";

// import App from './test9-quiz/App';

// import App from './test10-quiz/App';

// import App from './test11-redux-news-app/App';
import store from "./test11-redux-news-app/redux";


// import App from './test12/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
