import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { dummyData } from './api/exploreData'
import SmallCard from '@/components/SmallCard'

export default function Home({ exploreData }: any) {
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
        </main>
      </div>
    </>
  )
}

