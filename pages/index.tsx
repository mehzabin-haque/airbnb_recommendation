import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { dummyData } from './api/exploreData'
import { cardData } from './api/cardData'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className=''>
        <Header />
        <Banner />

        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            {/* pull some data from a server - API endpoints */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {dummyData.map((item, index) => (

                <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />

              ))}
            </div>
          </section>

          <section className='pt-6'>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            {/* pull some data from a server - API endpoints */}

            <div className='flex space-x-5 overflow-scroll scrollbar-hide p-4 -ml-3'>
              {cardData.map((item, index) => (

                <MediumCard key={item.img} img={item.img} title={item.title} />

              ))}
            </div>
          </section>

          <LargeCard img='/large.webp' title='The Greatest Outdoors' desc='Wishlists curated by Airbnb.' btnTxt='Get Inspired' />
        </main>
        <Footer />
      </div>
    </>
  )
}

