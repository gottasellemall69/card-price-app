import '@/styles/globals.css'
import { Html,Head,Main,NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
