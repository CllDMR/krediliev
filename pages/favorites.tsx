import React from "react";
import Head from "next/head";
import { Navbar, Footer, ListBox, Breadcrumbs } from "../src/components/common";
import { PageNav, PageTab, FavoriteTab } from "../src/components/sections";

const favorites = () => {
  return (
    <div>
      <Head>
        <title>Favorilerim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f7f7f7]">
        <Navbar />
        <Breadcrumbs page="Favorilerim" />
        <PageNav />
        <PageTab />
        <FavoriteTab />

        <Footer />
      </main>
    </div>
  );
};
export default favorites;
