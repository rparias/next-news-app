
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Next.js from scratch</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}
