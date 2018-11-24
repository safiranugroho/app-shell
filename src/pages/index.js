import React, { Component } from 'react';
import Link from 'next/link';
import { default as GlobalStyle } from '../components/global';
import {
  Provider,
  Hide,
  Toolbar,
  Drawer,
  NavLink,
  Image,
  Container,
  Heading,
  Text,
  Fixed,
  Relative
} from 'rebass';

const Hamburger = '../static/hamburger.svg';
const Close = '../static/close.svg';

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
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    };
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return ({
        sidebar: !prevState.sidebar
      });
    });
  };

  render() {
    return (
      <Provider theme={theme}>
        <GlobalStyle />
        <Hide xsmall small medium>
          <Toolbar bg='primary' minHeight={[0, 3, 2, 1, 0]} px={4} py={3}>
            <Heading fontSize={[2, 8, 6, 5]}>Hello!</Heading>
            <NavLink ml='auto'>Go somewhere</NavLink>
            <NavLink>Somewhere else</NavLink>
          </Toolbar>
        </Hide>
        <Hide large xlarge>
          <Toolbar bg='primary' minHeight={[0, 3, 2, 1, 0]} px={4} py={3}>
            <Heading fontSize={[2, 8, 6, 5]}>Hello!</Heading>
            <Image src={Hamburger} onClick={this.toggleSidebar} width={50} ml='auto' m={3} />
          </Toolbar>
        </Hide>
        <Container px={4} py={3} bg='lightgray' maxWidth='undefined'>
          <Heading fontSize={[2, 8, 6, 5, 3]} color='primary'>Please work.</Heading>
        </Container>
        <Drawer
          open={this.state.sidebar}
          onClick={this.toggleSidebar}
          side='right'
          p={3}
          color='primary'
          bg='lightgray'
          width='80%'>
          <Fixed top={0} right={0} zIndex={1}>
            <Image src={Close} ml='auto' width={50} m={4} />
          </Fixed>
          <Relative>
            <Heading color='primary' fontSize={8} px={4} py={3} mb={4}>Menu</Heading>
            <Link href='/'><Text fontSize={[2, 7, 6, 5, 3]} px={4} py={3}>Go somewhere</Text></Link>
            <Link href='/'><Text fontSize={[2, 7, 6, 5, 3]} px={4} py={3}>Somewhere else</Text></Link>
          </Relative>
        </Drawer>
      </Provider>
    )
  };
};

export default Index
