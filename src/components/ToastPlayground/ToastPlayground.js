import React from 'react';

import NewToastForm from "../NewToastForm";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <NewToastForm />
      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
