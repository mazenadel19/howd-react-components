import clsx from "clsx";
import React from "react";

import styles from "./Card.module.css";

export interface CardProps extends React.ComponentProps<"article"> {
  textColor: string;
  backgroundColor: string;
}

function Card({ textColor, backgroundColor, style, className, children, ...props }: Readonly<CardProps>) {
  const colorStyles = {
    color: textColor,
    backgroundColor,
  };

  return (
    <article className={clsx(styles.wrapper, className)} style={{ ...style, ...colorStyles }} {...props}>
      {children}
    </article>
  );
}

export default Card;
