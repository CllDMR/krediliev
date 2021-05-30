import React from "react";
import Head from "next/head";
import { Navbar, Footer, ListBox, Breadcrumbs } from "../src/components/common";
import { PageNav, MembershipInformationTab } from "../src/components/sections";

const membershipInformation = () => {
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
        <MembershipInformationTab />

        <Footer />
      </main>
    </div>
  );
};
export default membershipInformation;
