import React from "react";
import styles from "./NewsSection.module.css";
import "./common.css";

export default function NewsSection() {
  return (
    <section>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1em",
          fontSize: "2.5em",
          fontWeight: 500,
        }}
      >
        Connecting is easier with Teams
      </h2>
      <p
        style={{
          textAlign: "center",
          marginBottom: "1em",
          fontSize: "1.2em",
          fontWeight: 400,
        }}
      >
        Get the all-in-one app that connects you with other people online. Meet,
        chat, and share content with anyone from anywhere in an easy and
        reliable way.
      </p>
    </section>
  );
}
