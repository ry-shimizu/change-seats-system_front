import Header from "../common/header";
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
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
