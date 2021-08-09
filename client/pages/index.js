import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [pools, setPools] = useState([])
  const [channels, setChannels] = useState({})

  const [handling, setHandling] = useState(false)
  const [toast, setToast] = useState(false)

  let payload

  useEffect(() => {

    //settting diversion for non-existing data

    payload = {
        message: 'There are no pools launched at the moment. Be the first to launch one.',
        action_text: 'Create pool'
    }
    
    pools.length === 0 && setDiversion(payload)

  }, [pools])
  

  const setDiversion = (_payload) => {
    setChannels({
      diversion: _payload
    })
  }



  const createPoolHandler = (e) => {
    e.preventDefault()
    setHandling(true)
    setTimeout(() => {
      setHandling(false)
      setToast(true)
    }, 2000)
    
    setTimeout(() => {
      setToast(false)
    },5000)
  }

  const renderHead =
    <Head>
        <title>Defluence | Decentralized influencer platform</title>
        <meta name="description" content="Defluence, is the decentralized 
        social protocol established as an aggregator platform for interconnecting
        decentralized influencers and product teams for automating marketing and
        product awareness campaigns for their newly launching products, with smart
        contracts." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  
  const loader =
  <div className={styles.loader}>
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
    <span className={styles.circle}></span>
  </div>

 const renderDiversion =
    <div className={styles.diversion_block}>
     <i>{channels?.diversion?.message}</i>
     <button onClick={(e)=> createPoolHandler(e)} >{handling ? loader : channels?.diversion?.action_text}</button>
    </div>

  const mapPools = pools.map((pool, index) => {
    return (
      <div key={index}>
        <b>{pool.name}</b>
      </div>
    )
  })

  const renderContentLoader = <div className={styles.loader_content}>
        <div class="placeholder-content">
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
            <div class="placeholder-content_item"></div>
        </div>
  </div>

  const renderPools =
    <div className={styles.pools_section}>
      <b>POOLS</b>
      <div className={styles.loader_pool}>
      {renderContentLoader}
      {renderContentLoader}
      {renderContentLoader}
      {renderContentLoader}
      </div>
      {
        pools.length === 0 ? renderDiversion : mapPools
      }
    </div>

  const renderMain =
    <main>
      {renderPools}
    </main>
  
  const renderHeader =
    <div className={styles.header}>
      <div className={styles.brand}>
        <Image src='/logo.png' alt='logo' width='100' height='100'/>
        <h2>defluence</h2>
      </div>
      <ul className={styles.menu}>
        <Link href='/'>
          <a>Home</a>
        </Link>
         <Link href='/pools'>
          <a>Pools</a>
        </Link>
         <Link href='/crates'>
          <a>Crates</a>
        </Link>
        <Link href='/events'>
          <a>Events</a>
        </Link>
      </ul>
      <div>
        <button>Connect wallet</button>
      </div>
    </div>
  
  const renderFooter =
    <footer className={styles.footer}>
      <small>Powered by Dewallstreet Corporation © All Rights Reserved | 2021</small>
    </footer>
  
  const renderToast =
    <div className={styles.toast}>
      <i>Created pool successfully</i>
    </div>
  
  return (
    <div className={styles.container}>
      {renderHead}
      {renderHeader}
      {toast && renderToast}
      {renderMain}
      {renderFooter}
    </div>
  )
}
