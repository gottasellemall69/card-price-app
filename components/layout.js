import {SpeedInsights} from "@vercel/speed-insights/next";

export default function Layout({children}) {
  return (
    <>
      <main className="w-full overflow-hidden mx-auto">
        {children}
      </main>
      <SpeedInsights />
    </>
  );
}