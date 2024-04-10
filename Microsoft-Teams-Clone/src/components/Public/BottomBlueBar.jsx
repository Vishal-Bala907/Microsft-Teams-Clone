import React from "react";
import styles from "./BottomBlueBar.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";

export default function BlueBar() {
  return (
    <>
      <div className={styles.bMainSection}>
        <section className={styles.bLeftSection}>
          <section className={styles.leftHeading}>
            <h3>Get started with Microsoft Teams today</h3>
          </section>
          <section className={styles.buttons}>
            <a className={styles.firstAnchor} href="">
              Sign up for free
            </a>
            <a className={styles.secondAnchor} href="">
              Download
            </a>
          </section>
        </section>
        {/* ***************** LEFT***************  */}
        <section className={styles.bRightSection}>
          <div className={styles.home}>
            <div className={styles.Logo}>
              <IoHomeOutline />
            </div>
            <div className={styles.Content}>
              <h2>Home</h2>
              <a href="">Learn More</a>
            </div>
          </div>

          <div className={styles.home}>
            <div className={styles.Logo}>
              <FaRegBuilding />
            </div>
            <div className={styles.Content}>
              <h2>Business</h2>
              <a href="">Learn More</a>
            </div>
          </div>

          <div className={styles.home}>
            <div className={styles.Logo}>
              <LuBuilding2 />
            </div>
            <div className={styles.Content}>
              <h2>Enterprise</h2>
              <a href="">Learn More</a>
            </div>
          </div>

          <div className={styles.home}>
            <div className={styles.Logo}>
              <GiGraduateCap />
            </div>
            <div className={styles.Content}>
              <h2>Education</h2>
              <a href="">Learn More</a>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.para}>
        <a className={styles.specialAnchor} href="">
          [1]
        </a>
        The discount offer is available to new and existing customers who
        license a 12-month Microsoft Teams Essentials and Microsoft Teams Phone
        bundle (with or without a Microsoft Teams calling plan) through Direct
        and CSP direct channels between July 17, 2023, and July 1, 2024. This
        promotion is valid in the United States, Canada, and the United Kingdom.
        This annual subscription automatically renews and is subject to
        recurring billing at the regular price and selected term. Customers can
        cancel at any time to stop future charges. Microsoft reserves the right
        to cancel, change, or suspend this offer at any time without notice.
        <a
          className={styles.specialAnchor}
          href="https://support.microsoft.com/en-us/account-billing/learn-about-recurring-billing-subscriptions-in-the-united-kingdom-04e749b0-948b-471d-bea7-584cdc208b91"
        >
          Learn more about managing your subscription.
        </a>
        <br />
        <br />
        [*] AI-generated meeting notes are currently available in Microsoft
        Teams Premium only.
      </div>

      <hr />
    </>
  );
}
