import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>News App</title>
      <meta name="description" content="newsapp - the best app to read news" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>🗞 newsapi</header>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
