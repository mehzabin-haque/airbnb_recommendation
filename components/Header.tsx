import React, { useState } from 'react'
import Image from 'next/image'
// import  SearchIcon  from '@heroicons/react/solid'
import { FaSearch } from 'react-icons/fa'
import { HiGlobeAlt } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSolidUserCircle } from 'react-icons/bi'
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css"; // main style fiPle
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from 'date-fns';
import { useRouter } from 'next/router'
type Props = {}

function Header ({ placeholder }:any)  {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuests, setNumOfGuests] = useState(1);
    const router = useRouter();
    // console.log(searchInput);
    const handleSelect = (ranges: any) => {
        // console.log(ranges);
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    };

    // const resetInput = () => {
    //   setSearchInput(" ");
    // };

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuests,
            },
        });
        setSearchInput("");
    };
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "Selection",
    };


    return (
        <>
            <header className="fixed w-screen top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:px-8">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto "
      >
        <Image
          src="/airbnb-logo.png"
          alt="logo"
         
          fill
          className="object-contain object-left cursor-pointer"
        />
      </div>
      {/* Middle - Search Bar */}
      <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput || ""}
          className="pl-4 flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder= {placeholder ||"Start Your Search"}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="hidden md:inline-flex h-8 p-2 text-red-400 bg-white rounded-full cursor-pointer md:mx-2" onClick={search}>
    <FaSearch  />
  </div>
</div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-block">Become a host</p>
        <HiGlobeAlt className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <AiOutlineMenu className="h-6 " />
          < BiSolidUserCircle className="h-6 " />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-0">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>

            <BiSolidUserCircle className="h-6 " />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              min={1}
              onChange={(e:any) => setNumOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
}


export default Header