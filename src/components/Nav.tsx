import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import styles from "../styles/Nav.module.css";
import AuthContext from "./AuthContext";

const Nav = () => {
  const router = useRouter();
  const { signout, user }: any = useContext(AuthContext);

  console.log({ user });

  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [ham, setHam] = useState(false);

  return (
    <nav>
      <div className={styles.height}></div>
      <div className={styles.navbarItems}>
        <span className={styles.navbarLogo}>
          <Link href="/">
            <h2 className="logo">CountyCU</h2>
          </Link>
        </span>
        <div className={styles.menuIcon} onClick={() => setHam(!ham)}>
          <div
            className={
              !ham ? styles.patty : `${styles["patty"]} ${styles["active"]}`
            }
          ></div>
        </div>

        <ul
          onClick={() => setHam(!ham)}
          className={
            !ham ? `${styles["navMenu"]} ${styles["active"]}` : styles.navMenu
          }
        >
          <li className={styles.navLinks} onClick={() => router.push("/#home")}>
            {" "}
            Home
          </li>
          {/* <li className={styles.navLinks}> signout</li> */}
          <li
            className={styles.navLinks}
            onClick={() => router.push("/#about")}
          >
            {" "}
            About
          </li>
          <li
            className={styles.navLinks}
            onClick={() => router.push("/#services")}
          >
            {" "}
            Services
          </li>
          <li
            className={styles.navLinks}
            onClick={() => router.push("/#contact")}
          >
            {" "}
            Contact Us
          </li>
          <li
            className={styles.navLinks}
            onClick={() => router.push("/dashboard")}
          >
            {" "}
            Dashboard
          </li>
          <li className={styles.navLinks}>
            {" "}
            <Link href="/faq">FAQ</Link>
          </li>
          <li className={styles.navLinks}>
            {!user ? (
              <Link href="/login" className={styles.btn}>
                log in
              </Link>
            ) : (
              <button onClick={signout} className={styles.btn}>
                Log Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
