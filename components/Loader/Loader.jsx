import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import styles from "./Loader.module.css";

export const Loader = ({ loading }) => {
  return (
    <div className={styles.container}>
      <ClipLoader color="red" loading={loading} size={150} />
    </div>
  );
};
