import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>It's Next.js 13.3!</title>
        <meta name="description" content="It's Next.js 13.3!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          It's Next.js 13.3!
        </h1>
        <div>Now with dynamic image generation capabilities</div>
        <button>Go</button>
      </main>
    </div>
  )
}
