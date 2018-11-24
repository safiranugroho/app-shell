import React, { Component, Fragment } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import {
  Container
} from 'rebass';

class Page extends Component {
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
      <Fragment>
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar isOpen={this.state.sidebar} toggleSidebar={this.toggleSidebar} />
        <Container px={4} py={3} bg='lightgray' maxWidth='undefined'>
          {this.props.children}
        </Container>
      </Fragment>
    )
  }
}

export default Page;