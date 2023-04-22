import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>{/* Add any global head tags here */}</Head>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
