
import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>Next.js from scratch</h1>
        <Link href='/about'>About</Link>
      </div>
    </PageLayout>
  )
}
