import React from 'react';
import Link from 'next/link';
import { Pane, majorScale } from 'evergreen-ui';

const Footer = () => {
  return (
    <footer>
      <Pane background='overlay' paddingY={majorScale(9)}>
        <div className='container'>
          <div className='footer-content' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div className='footer-links' style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <Link href='/#' legacyBehavior>
                <a>About</a>
              </Link>
              <Link href='/#' legacyBehavior>
                <a>Contact</a>
              </Link>
              <Link href='/#' legacyBehavior>
                <a>Privacy Policy</a>
              </Link>
            </div>
            <div className='social-links' style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <a href='https://twitter.com/example' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
              <a href='https://facebook.com/example' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
              <a href='https://instagram.com/example' target='_blank' rel='noopener noreferrer'>
                Instagram
              </a>
            </div>
          </div>
          <div className='footer-credits'>&copy; {new Date().getFullYear()} FlexiNote. All rights reserved.</div>
        </div>
      </Pane>
    </footer>
  );
};

export default Footer;
