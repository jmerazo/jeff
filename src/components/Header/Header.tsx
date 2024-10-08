import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a className={styles.perfil} target="_blank" href="https://github.com/jmerazo"><img src="/logos/github_blank.png" alt="Github" /></a>
        <a className={styles.perfil} target="_blank" href="https://www.linkedin.com/in/ymerazo96/"><img src="/logos/linkedin.png" alt="LinkedIn" /></a>
      </nav>
    </header>
  );
};

export default Header;
