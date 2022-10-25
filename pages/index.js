
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  console.log(articles);
  return (
    <PageLayout>
      <div className={styles.container}>
        {articles.length === 0 && <p>There are no articles</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <article key={index}>
            <img 
              src={article.urlToImage} 
              alt={`Image for the article ${article.title}`}
              width={300}
              height={169}
              />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  )
}

// N requests -> will execute only 1 or when refreshing the page
export async function getStaticProps() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b5dbd67693af4df080df4680eb8b164b')
  const {articles} = await response.json()

  return {
    props: {
      articles
    }
  }
}

// N requests -> will execute N times
// used for data live
// used for a lot of dynamic data
// export async function getServerSideProps() {
//   const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b5dbd67693af4df080df4680eb8b164b')
//   const {articles} = await response.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
