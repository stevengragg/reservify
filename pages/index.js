import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Reservify</title>
                <link rel="icon" href="/Reservify.png" sizes="30x30" type="image/png" />
            </Head>

            <Header />
            {/* Banner */}
            <Banner />
        </div>
    );
}
