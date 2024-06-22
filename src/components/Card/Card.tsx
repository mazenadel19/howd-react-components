import React from "react";

import styles from "./Card.module.css";

export interface CardProps extends React.ComponentProps<"article"> {
  textColor: string;
  backgroundColor: string;
}

function Card({ textColor, backgroundColor, children }: Readonly<CardProps>) {
  return <article className={styles.wrapper}>{children}</article>;
}

export default Card;
