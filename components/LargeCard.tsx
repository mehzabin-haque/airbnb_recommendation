import React from 'react'
import Image from 'next/image'

type Props = {}

function LargeCard({img,title,desc,btnTxt}: any){
  return (
    <section className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} alt='' objectFit='cover' fill className='rounded-2xl' />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{desc}</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{btnTxt}</button>
        </div>
    </section>
  )
}

export default LargeCard
