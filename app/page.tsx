import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 , zIndex: -1}}>
        <Image
          className={styles.logo}
          src="/bosque.jpg"
          alt="Bosque"
          fill
          style={{ objectFit: "cover" , filter: 'none'}}
          priority
        />
      </div>
      <main className={styles.main} style={{zIndex: 1}}>
        <div className={styles.description}>
          <p>
            I am&nbsp;
            <code className={styles.code}>Benjamín</code>
          </p>
        </div>
        <Link href="/multiplicaciones">
          <div style={{backgroundColor: 'grey', opacity: 0.9, padding: 16, borderRadius: 8}}>
          <code className={styles.code}>Jugar a la multiplicación</code>
          </div>
        </Link>
      </main>
    </div>
  )
}
