// pages/layout.js
import {Html,Head,Main,NextScript} from 'next/document';

export default function RootLayout() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto w-full p-2 min-h-screen max-w-screen-2xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
