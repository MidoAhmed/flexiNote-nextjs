import React from 'react';
import Link from 'next/link';
import { Text } from 'evergreen-ui';

const Logo = ({ ...styles }) => {
  return (
    <Link href='/' legacyBehavior>
      <a>
        <Text fontSize='30px' color='#47B881' {...styles}>
          <strong>FlexiNote</strong>
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
