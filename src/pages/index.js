import React from 'react';
import { Provider, Toolbar, NavLink, Container, Heading } from 'rebass';

const theme = {
  colors: {
    primary: '#7226e0',
    secondary: '#fb9126',
  },
  minHeights: [
    48,
    64,
    120,
    150
  ],
}

const Index = () => (
  <Provider theme={theme}>
    <Toolbar bg="primary" minHeight={[0, 3, 2, 1, 0]} p={[3]}>
      <NavLink fontSize={[2, 8, 6, 5, 3]}>Hello!</NavLink>
      <NavLink ml="auto">Go somewhere</NavLink>
      <NavLink>Somewhere else</NavLink>
    </Toolbar>
    <Container p={3} bg="lightgray" maxWidth="undefined">
      <Heading fontSize={[2, 8, 6, 5, 3]} color="primary">Please work.</Heading>
    </Container>
  </Provider>
)

export default Index
