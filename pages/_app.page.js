// pages/_app.js
import '@/styles/globals.css'
import '@/styles/index.css'
 function App({ Component,pageProps }) {
  return <Component {...pageProps} />
}
export default App;
