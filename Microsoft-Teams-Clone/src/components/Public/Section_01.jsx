import React from "react";
import styles from "./Section_01.module.css";
export default function Section_01() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Communicate in real time</h2>
            <p>Send instant messages to a group or individuals.</p>
            <a className={styles.anchor} href="">
              Learn more
            </a>
            <br />
            <a className={styles.anchor} href="">
              Learn how to start a chat
            </a>
          </div>
          <div
            className={styles.image1}
            style={{ height: "25em", width: "50%" }}
          />
        </div>

        <div className={styles.box}>
          <div
            className={styles.image2}
            style={{ height: "25em", width: "50%" }}
          />
          <div className={styles.left}>
            <h2 className={styles.heading}>Meet from anywhere</h2>
            <p>
              Schedule group audio or video calls for up to 60 minutes. Get
              unlimited 1:1 meetings lasting up to 30 hours.
            </p>
            <a className={styles.anchor} href="">
              Join a meeting
            </a>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Collaborate seamlessly</h2>
            <p>
              Send links to documents, upload files, or share photos with up to
              5GB of cloud storage.
            </p>
            <a className={styles.anchor} href="">
              Share now
            </a>
          </div>
          <div
            className={styles.image3}
            style={{ height: "25em", width: "50%" }}
          />
        </div>

        <div className={styles.box}>
          <div
            className={styles.image4}
            style={{ height: "25em", width: "50%" }}
          />
          <div className={styles.left}>
            <h2 className={styles.heading}>Get things done together</h2>
            <p>
              Create communities with like-minded people to connect on ideas and
              make plans.
            </p>
            <a className={styles.anchor} href="">
              Create a community
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.image5}></div>
        <div className={styles.paras}>
          <p className={styles.head}>
            California School for the Deaf, Riverside
          </p>
          <p className={styles.para1}>
            "This is such an exciting breakthrough for school communications!"
          </p>
          <p className={styles.para1}>
            —Erika Thompson, Outreach Coordinator, California School for the
            Deaf, Riverside
          </p>
        </div>
      </div>
    </>
  );
}
