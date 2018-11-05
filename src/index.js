import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import config from './config';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { backendApi } = config();

const Root = _ => (
  <BrowserRouter>
    <ApolloProvider client={backendApi}>
      <App/>
    </ApolloProvider>
  </BrowserRouter>
);

render(<Root />, document.getElementById('root'));

registerServiceWorker();
