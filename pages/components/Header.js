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
      <Toolbar bg='primary' minHeight={[0, 3, 2, 1, 0]} px={4} py={3}>
        <Link href="/"><Heading fontSize={[2, 8, 6, 5]}>Hello!</Heading></Link>
        <NavLink href='/about' ml='auto'>About</NavLink>
        <NavLink href='/docs'>Docs</NavLink>
      </Toolbar>
    </Hide>
    <Hide large xlarge>
      <Toolbar bg='primary' minHeight={[0, 3, 2, 1, 0]} px={4} py={3}>
        <Link href="/"><Heading fontSize={[2, 8, 6, 5]}>Hello!</Heading></Link>
        <Image src={Hamburger} onClick={toggleSidebar} width={50} ml='auto' m={3} />
      </Toolbar>
    </Hide>
  </Fragment>
);

export default Header;