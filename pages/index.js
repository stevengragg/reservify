import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
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
          <h2 className="text-4xl font-semibold pb-5">Near You</h2>

          {/* Pull some data from the server - API endpoints */}
          {/* Static Rendering */}
          {exploreData.map(({ img, location, distance }) => (
            //   Map through a jsx
            <SmallCard key={img} img={img} location={location} distance={distance} />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  console.log("getStaticProps: started");
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());

  console.log(exploreData);
  return {
    props: {
      exploreData
    }
  };
}
