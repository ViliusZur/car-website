import React from 'react';
import styles from './sportsCars.module.css';

const Background = ({title}) => {
  return (
    <>
    <div className={styles.BackgroundImageContainer}>
      <div className={styles.BackgroundImage} />
    </div>
    <div className={styles.VerticalLines} />
    <div className={styles.PageTitle}>{title}</div>
    </>
  );
}

export default Background;
