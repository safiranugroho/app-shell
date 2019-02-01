import React from 'react';
import Link from 'next/link';

import {
  Drawer,
  Fixed,
  Image,
  Relative,
  Heading,
  Text
} from 'rebass';

const Close = '../static/close.svg';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <Drawer
    open={isOpen}
    onClick={toggleSidebar}
    side='right'
    p={3}
    color='primary'
    bg='lightgray'
    width='80%'>
    <Fixed top={0} right={0} zIndex={1}>
      <Image src={Close} ml='auto' width={50} m={4} />
    </Fixed>
    <Relative>
      <Heading color='primary' fontSize={6} px={4} py={3} mb={4}>Menu</Heading>
      <Link href='/about'><Text fontSize={6} px={4} py={3}>About</Text></Link>
      <Link href='/docs'><Text fontSize={6} px={4} py={3}>Docs</Text></Link>
    </Relative>
  </Drawer>
);

export default Sidebar;