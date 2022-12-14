import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/homepage/Contact";
import Header from "../components/homepage/Header";
import Landing from "../components/homepage/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
