// pages/_document.page.js
import { Html,Main,NextScript } from 'next/document';
import Head from 'next/document';

export default function RootLayout() {
  return (
    <Html lang="en">
        <Head>
          <title>Card Price App</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
