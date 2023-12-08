// pages/_app.js
import { SpeedInsights } from "@vercel/speed-insights/next";
import '@/styles/globals.css'
import '@/styles/index.css'


function App({ Component,pageProps }) {
  return <><Component {...pageProps} /><SpeedInsights /></>
  
}
export default App;
