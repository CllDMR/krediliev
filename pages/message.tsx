import React from "react";
import Head from "next/head";
import { Navbar, Footer, ListBox, Breadcrumbs } from "../src/components/common";
import { PageNav, MessageTab } from "../src/components/sections";

const message = () => {
  return (
    <div>
      <Head>
        <title>Favorilerim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f7f7f7]">
        <Navbar />
        <Breadcrumbs page="Mesajlarım" />
        <PageNav />
        <MessageTab />

        <Footer />
      </main>
    </div>
  );
};
export default message;
