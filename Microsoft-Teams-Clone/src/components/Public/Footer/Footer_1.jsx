import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { HiMiniPencilSquare } from "react-icons/hi2";
import styles from "./Footer.module.css";

export default function Footer_1() {
  return (
    <section className={styles.firstSection}>
      <div classNames={styles.text}>Follow Microsoft Teams</div>
      <div className={styles.icons}>
        <BsTwitterX title="Twitter" />
        <IoLogoInstagram title="Instagram" />
        <IoLogoYoutube title="Youtube" />
        <HiMiniPencilSquare title="Blog" />
      </div>
    </section>
  );
}
