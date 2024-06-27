import clsx from "clsx";
import React from "react";

import styles from "./Card.module.css";

export interface CardProps extends React.ComponentProps<"article"> {
  textColor: string;
  backgroundColor: string;
}

function Card({ textColor, backgroundColor, className, children, ...props }: Readonly<CardProps>) {
  return (
    <article className={clsx(styles.wrapper, className)} {...props}>
      {children}
    </article>
  );
}

export default Card;
