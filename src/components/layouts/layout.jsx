import React from "react";
import Navbar from "../headers/navbar";
import Footer from "../footers/footer";
import Head from "next/head";

const PageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
