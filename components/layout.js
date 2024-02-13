import {SpeedInsights} from "@vercel/speed-insights/next";
import Navbar from '@/components/Navigation/NavBar';

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="w-full p-2 max-w-screen-2xl mx-auto">
        {children}
      </main>
      <SpeedInsights />
    </>
  );
}