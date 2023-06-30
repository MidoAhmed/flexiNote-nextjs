import React from 'react';
import Link from 'next/link';
import { Button, Pane } from 'evergreen-ui';

const NotFoundPage = () => {
  return (
    <Pane display='flex' alignItems='center' justifyContent='center' border='default' background='tint2'>
      <div style={{textAlign: 'center'}}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link href='/' legacyBehavior>
          <Button appearance='primary'>Go Back Home</Button>
        </Link>
      </div>
    </Pane>
  );
};

export default NotFoundPage;
