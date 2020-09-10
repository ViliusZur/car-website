import React from "react";
import styles from "./car.module.css";

const Car = ({ title, body, image }) => {
  return (
    <div className={styles.Car}>
      <div className={styles.ImageBackground} />
      <img
        className={styles.Image}
        src={image}
        alt={title}
      />
      <div className={styles.TextContainer}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.BodyWrapper}>
          <div className={styles.Body} dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </div>
  );
};

export default Car;
