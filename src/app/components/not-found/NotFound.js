"use client";
import useRedirect from "@/hooks/useRedirect.js";

import styles from "./NotFound.module.css";

export default function NotFound() {
  const { secondsRemaining } = useRedirect("/", 5);

  return (
    <div className={styles.errorWrap}>
      <div className={styles.errorContainer}>
        <h1>404</h1>
        <p>This page cannot be found...</p>
        <p>
          Be careful, URLs are{" "}
          <span className={styles.memeFont}>cAsE sEnSiTiVe</span>...
        </p>
        <p>
          Sending you back in{" "}
          <span className={styles.countDown}>{secondsRemaining}</span> seconds
        </p>
      </div>
    </div>
  );
}