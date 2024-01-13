import Header from "../common/Header";
import "../globals.css";

import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default App;
