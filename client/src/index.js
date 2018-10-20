import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
