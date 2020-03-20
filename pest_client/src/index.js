import React    from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.min.css'

import client from './client';

import App from './App';

import registerServiceWorker from './registerServiceWorker';


// 将根组件包含在 ApolloProvider 中

const element =

  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>
;

ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
