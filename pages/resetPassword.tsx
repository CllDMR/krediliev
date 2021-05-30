import React from "react";
import Head from "next/head";
import { Navbar, Footer, ListBox, Breadcrumbs } from "../src/components/common";
import { ResetPassword } from "../src/components/sections";
const resetPassword = () => {
  return (
    <div>
      <Head>
        <title>Üye Ol-KrediliEv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f7f7f7]">
        <Navbar />
        <Breadcrumbs page="Şifremi Unuttum" />
        <ResetPassword />

        <Footer />
      </main>
    </div>
  );
};
export default resetPassword;
