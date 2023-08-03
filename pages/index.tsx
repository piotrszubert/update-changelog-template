import Head from 'next/head'
import { Nunito } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import SubscribeForm from '@/components/subscribeForm'
import Card from '@/components/card'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Update - changelog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header/> */}
      <main className={`${nunito.className} ${styles.main}`}>
        <div>  
          <SubscribeForm/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          changelog here
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
    </>
  )
}
