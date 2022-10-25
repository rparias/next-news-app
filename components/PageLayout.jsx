import Head from 'next/head'

const PageLayout = ({children, title='News App'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="newsapp - the best app to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>🗞 newsapi</header>
      <main>
        {children}
      </main>
      <style jsx>{`
      header {
        padding: 20px;
      }
    `}</style>
    </>
  )
}

export default PageLayout