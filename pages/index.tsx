import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const generateImage = async() => {
    const rand = parseInt(Math.random() * 10000 + '').toString().split('').reverse().join('') + parseInt(Math.random() * 10000 + '')
    const res = await fetch('/api/image/generate');
    if (res.ok) {
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      setImageUrl(objectUrl);
    } else {
      console.error('Error generating image:', res.statusText);
    }
  }

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
        <button onClick={() => generateImage()} className={styles.button}>Generate</button>
        <div>{imageUrl && <img src={imageUrl} alt="Generated Image" />}</div>
      </main>
    </div>
  )
}
