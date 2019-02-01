import React from 'react';
import {
  Provider,
  Heading,
} from 'rebass';

import GlobalStyle from '../utils/global';
import Theme from '../utils/theme';
import Page from '../components/Page';

const Index = () => (
  <Provider theme={Theme}>
    <GlobalStyle />
    <Page>
      <Heading fontSize={[2, 8, 6, 5, 3]} color='primary'>This is the homepage.</Heading>
    </Page>
  </Provider>
);

export default Index
