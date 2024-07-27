import clsx from "clsx";
import React from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "filled" | "outline";
}

function Button({ variant = "filled", className, children, ...props }: Readonly<ButtonProps>) {
  return (
    <button data-variant={variant} className={clsx(styles.wrapper, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
