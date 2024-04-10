import React from "react";
import styles from "./Footer.module.css";
export default function Footer_2() {
  return (
    <section className={styles.footerListItems}>
      <ul className={styles.List}>
        <li>
          <h5>What's new</h5>
        </li>
        <li>Surface Laptop Studio 2</li>
        <li>Surface Laptop Go 3</li>
        <li>Surface Pro 9</li>
        <li>Surface Laptop 5</li>
        <li>Microsoft Copilot</li>
        <li>Copilot in Windows</li>
        <li>Explore Microsoft products</li>
        <li>Windows 11 apps</li>
      </ul>
      {/* *********************************** */}
      <ul className={styles.List}>
        <li>
          <h5>Microsoft Store</h5>
        </li>
        <li>Account profile</li>
        <li>Download Center</li>
        <li>Returns</li>
        <li>Order tracking</li>
        <li>Certified Refurbished</li>
        <li>Microsoft Store Promise</li>
        <li>Flexible Payments</li>
        <li>Windows 11 apps</li>
      </ul>
      {/* *********************************** */}
      <ul className={styles.List}>
        <li>
          <h5>Education</h5>
        </li>
        <li>Devices for education</li>
        <li>Microsoft Teams for Education</li>
        <li>Microsoft 365 Education</li>
        <li>How to buy for your school</li>
        <li>Educator training and development</li>
        <li>Deals for students and parents</li>
        <li>Azure for students</li>
      </ul>

      {/* *********************************** */}
      <ul className={styles.List}>
        <li>
          <h5>Business</h5>
        </li>
        <li>Microsoft Cloud</li>
        <li>Microsoft Security</li>
        <li>Dynamics 365</li>
        <li>Microsoft 365</li>
        <li>Microsoft Power Platform</li>
        <li>Microsoft Teams</li>
        <li>Copilot for Microsoft 365</li>
        <li>Small Business</li>
      </ul>

      {/* *********************************** */}
      <ul className={styles.List}>
        <li>
          <h5>Developer & IT</h5>
        </li>
        <li>Azure</li>
        <li>Developer Center</li>
        <li>Documentation</li>
        <li>Microsoft Learn</li>
        <li>Microsoft Tech Community</li>
        <li>Azure Marketplace</li>
        <li>AppSource</li>
        <li>Visual Studio</li>
      </ul>

      <ul className={styles.List}>
        <li>
          <h5>Company</h5>
        </li>
        <li>Careers</li>
        <li>About Microsoft</li>
        <li>Company news</li>
        <li>Privacy at Microsoft</li>
        <li>Investors</li>
        <li>Diversity and inclusion</li>
        <li>Accessibility</li>
        <li>Sustainability</li>
      </ul>
    </section>
  );
}
