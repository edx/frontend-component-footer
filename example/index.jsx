import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from '@edx/frontend-platform/i18n';

import './index.scss';
import Footer from '../src';

const App = () => (
  <div>
    <IntlProvider locale="en">
      <Footer
        onLanguageSelected={() => {}}
        supportedLanguages={[
          { label: 'English', value: 'en' },
          { label: 'Español', value: 'es' },
        ]}
      />
    </IntlProvider>
  </div>
);

render(<App />, document.getElementById('root'));
