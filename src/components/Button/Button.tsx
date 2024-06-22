import React from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "filled" | "outline";
}

function Button({ variant = "filled", children }: Readonly<ButtonProps>) {
  return <button className={styles.wrapper}>{children}</button>;
}

export default Button;
