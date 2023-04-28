import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SXDC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Collaborators get started by Login <a href='#'>Login</a>&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
              <Image
                alt="SXDC Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
          </div>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/med-redBand.jpeg"
            alt="Red Band"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blogs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Schedule-X Drug Abuse&nbsp;Extend of it world-wide.
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn the Medicine Supply Chain <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             <li> Learn how drugs reach your home from a factory.</li> 
             <li> What are loop holes reported on schedule-x  &nbsp;!</li>
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover how this application can help the youth and help Govt agencies to gather data for various&nbsp;projects.
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Join Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Regiester with us to be part of this mission and be a civle vigilannte &nbsp;.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
