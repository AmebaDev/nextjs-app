import Head from 'next/head'

import Navbar from '../components/NavBar/'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="">
      <Head>
          <title>React Lama App</title>
          <link rel='icon' href="/favicon.ico" />
      </Head>
    {/*Header */}
    <Navbar />

    {/* Banner */}
    <Banner />
    </div>
  )
}
