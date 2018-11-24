import React from 'react';
import {
  Provider,
  Heading,
} from 'rebass';

import GlobalStyle from './utils/global';
import Theme from './utils/theme';
import Page from './components/Page';

const Docs = () => (
  <Provider theme={Theme}>
    <GlobalStyle />
    <Page>
      <Heading fontSize={[2, 8, 6, 5, 3]} color='primary'>This is the docs.</Heading>
    </Page>
  </Provider>
);

export default Docs