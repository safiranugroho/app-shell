import React, { Fragment } from 'react';
import Link from 'next/link';

import {
  Hide,
  Toolbar,
  Heading,
  NavLink,
  Image
} from 'rebass';

const Hamburger = '../static/hamburger.svg';

const Header = ({ toggleSidebar }) => (
  <Fragment>
    <Hide xsmall small medium>
      <Toolbar bg='primary' minHeight={0} px={4} py={3}>
        <NavLink href="/" p='undefined'><Heading fontSize={5}>Hello!</Heading></NavLink>
        <NavLink href='/about' ml='auto' fontSize={2}>About</NavLink>
        <NavLink href='/docs' fontSize={2}>Docs</NavLink>
      </Toolbar>
    </Hide>
    <Hide large xlarge>
      <Toolbar bg='primary' minHeight={[2, 3, 2]} px={4} py={3}>
        <NavLink href="/" p='undefined'><Heading fontSize={6}>Hello!</Heading></NavLink>
        <Image src={Hamburger} onClick={toggleSidebar} width={50} ml='auto' m={3} />
      </Toolbar>
    </Hide>
  </Fragment>
);

export default Header;