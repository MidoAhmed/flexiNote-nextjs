import React from 'react';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

type AppProps = {
  Component: any;
  pageProps: any;
};

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
