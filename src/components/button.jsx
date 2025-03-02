import React from "react";

export default function Button({ styles, text, click }) {
  return (
    <div className={styles} onClick={click}>
      {text}
    </div>
  );
}
