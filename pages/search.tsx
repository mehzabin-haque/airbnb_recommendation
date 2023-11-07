import { format } from "date-fns";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapGL from "../components/MapGL";
import { hotelData } from "./api/hotleData";
interface SearchProps {
  searchResults: {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    lat: number;
    long: number;
  }[];
}

function Search ({ searchResults }:any) {
  const router = useRouter();

  const { location, startDate, endDate, numOfGuests } = router.query;
  console.log(router.query);
  const formattedStartDate = format(new Date(startDate as string), "yyyy-MM-dd");
  const formattedEndDate = format(new Date(endDate as string), "yyyy-MM-dd");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />
      <main className="flex mt-24">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p
              className="px-4 py-2 border rounder-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition duration-100 ease-out"
            >
              Cancellation Flexibility
            </p>
            <p
              className="px-4 py-2 border rounder-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition duration-100 ease-out"
            >
              Type of Place
            </p>
            <p
              className="px-4 py-2 border rounder-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition duration-100 ease-out"
            >
              Price
            </p>
            <p
              className="px-4 py-2 border rounder-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition duration-100 ease-out"
            >
              Rooms and Beds
            </p>
            <p
              className="px-4 py-2 border rounder-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition duration-100 ease-out"
            >
              More Filters
            </p>
          </div>
          <div className="flex flex-col">
            {hotelData.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  
                />
              )
            )}
          </div>
        </section>
        <section className="hidden lg:inline-flex min-w-[600px]">
          {/* <MapGL searchResults={searchResults} /> */}
        </section>
      </main>
    </>
  );
};

export default Search;
