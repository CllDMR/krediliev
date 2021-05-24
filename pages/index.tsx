import Head from "next/head";
import { FC, useState } from "react";
import { Navbar, Footer, ListBox } from "../src/components/common";
import {
  MainHero,
  InfoCard,
  CountCard,
  AdCard,
  CategoryCard,
} from "../src/components/sections";

export default function Home({ fixed }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <MainHero />
        <AdCard />
        <CountCard />
        <InfoCard />
        <CategoryCard />
        <AdCard />

        <Footer />
      </main>
    </div>
  );
}
