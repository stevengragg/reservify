import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

export default function Home({ exploreData, liveData }) {
  return (
    <div className="">
      <Head>
        <title>Reservify</title>
        <link rel="icon" href="/Reservify.png" sizes="30x30" type="image/png" />
      </Head>

      <Header />
      {/* Banner */}
      <Banner />

      {/* Section */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Near You</h2>

          {/* Pull some data from the server - API endpoints */}
          {/* Static Rendering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-5">
            {exploreData?.map(({ img, location, distance }) => (
              //   Map through a jsx
              <SmallCard key={img} img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>

        <section className="pt-6 pb-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere. Why not?</h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveData?.map(({ img, title }) => (
              <MediumCard key={title} title={title} img={img} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  console.log("getStaticProps: started");
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
  const liveData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  console.log(exploreData);
  console.log(liveData);

  return {
    props: {
      exploreData,
      liveData
    }
  };
}
