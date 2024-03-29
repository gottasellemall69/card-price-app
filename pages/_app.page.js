// pages/_app.js
import '@/styles/globals.css';
import '@/styles/index.css';
import '@/styles/styles.css';
import Layout from '@/components/layout';

export default function MyApp({Component,pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}