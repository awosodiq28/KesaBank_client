"use client";

import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { AuthProvider } from "../AuthContext";
import NavClient from "./NavClient";

const Nav = () => {
  return (
    <nav>
      {/* <AuthProvider> */}
      <div className={styles.height}></div>
      <div className={styles.navbarItems}>
        <span className={styles.navbarLogo}>
          <Link href="/">
            <h2 className="logo">CountyCU</h2>
          </Link>
        </span>
        {/* TODO */}
        <NavClient />
      </div>
      {/* </AuthProvider> */}
    </nav>
  );
};

export default Nav;
