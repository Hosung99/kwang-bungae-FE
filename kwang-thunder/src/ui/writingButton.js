import React from "react";
import styles from "../css/writingButton.module.css";

function writingButton() {
  const handleScroll = () => {
    window.location.replace("/writing");
  };

  return (
    <div className={styles.topBtn_wrap}>
      <button className={styles.topBtn} onClick={handleScroll}>
        글작성
      </button>
    </div>
  );
}

export default writingButton;
