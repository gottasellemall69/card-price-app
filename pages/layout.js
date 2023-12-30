// pages/layout.js
import { Html,Head,Main,NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
        <Head />
      <body className="mx-auto w-full p-2 min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
