import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Image
          className={styles.logo}
          src="/bosque.jpg"
          alt="Bosque"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            I am&nbsp;
            <code className={styles.code}>Benjamín</code>
          </p>
        </div>
        <div className={styles.center}>
        </div>
      </main>
    </div>
  )
}
