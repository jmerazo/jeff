import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Email: jmerazo96@gmail.com</p>
      <p>© {currentYear} Jeff</p>
    </footer>
  );
};

export default Footer;