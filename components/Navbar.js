import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.navLink} role="button" tabIndex="0">
          Home
        </span>
      </Link>
      <Link href="/about">
        <span className={styles.navLink} role="button" tabIndex="0">
          About Me
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
