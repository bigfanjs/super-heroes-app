import React from "react";

import Input from "../input-field";

import styles from "./app.scss";

export default function () {
  return (
    <form className={styles.form}>
      <Input label="Real Name" />
      <Input label="Nick Name" />
    </form>
  );
}