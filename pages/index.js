import Head from 'next/head'

import Navbar from '../components/NavBar/'
import Banner from '../components/Banner/Banner'
import SmallCard from '../components/SmallCard'


import { navigation } from '../assets/items'

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

    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="">
        {navigation.map((item) => (
          <SmallCard  
            title={item.title} 
            text = {item.text}
            img={item.img}
          
          />
        ))}
      </section>
    </main>
    </div>
  )
}
