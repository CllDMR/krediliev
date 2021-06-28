import React from "react";
import Head from "next/head";
import { Navbar, Footer, ListBox, Breadcrumbs } from "../src/components/common";
import { Login } from "../src/components/sections";

const login = () => {
  return (
    <div>
      <Head>
        <title>Favorilerim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f7f7f7]">
        <Navbar />
        <Breadcrumbs page="Giriş Yap" />
        <Login />

        <Footer />
      </main>
    </div>
  );
};
export default login;
