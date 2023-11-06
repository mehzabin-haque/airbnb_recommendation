import React from 'react'
import Image from 'next/image'
// import  SearchIcon  from '@heroicons/react/solid'
import {FaSearch} from 'react-icons/fa'
import {HiGlobeAlt} from 'react-icons/hi'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiSolidUserCircle} from 'react-icons/bi'
type Props = {}

const Header = (props: Props) => {
  return (
    <>
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md
        p-5 md:px-10">
            {/* logo */}
            <div className='relative flex items-center h-10 
            cursor-pointer my-auto'>
                <Image src="/airbnb-logo.png" alt="logo" 
                height={50}  width={50} objectFit='contain' objectPosition='left' />
            </div>
            {/* search */}
            <div className='flex items-center 
            md:border-2 rounded-full py-2 md:shadow-sm'>
                <input className='flex-grow pl-5 
                bg-transparent outline-none 
                text-sm text-gray-600
                 placeholder-gray-400' type="text" placeholder='Start your search' />
                {/* //need to fix this */}
                <FaSearch className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
            {/* last part */}
            
            <div className='flex items-center space-x-4 
            justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'> Become a host</p>
                <HiGlobeAlt className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <AiOutlineMenu className='h-6' />
                <BiSolidUserCircle className='h-6'/>
                </div>
               
            </div>
        </header>
    </>
  )
}

export default Header