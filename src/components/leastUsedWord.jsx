import React from "react";
import { useWord } from "../context/WordContext";

export default function leastUsedWord({ styles }) {
  // Using the custom hook 'useWord' to access the leastUsedWord data from WordContext
  const { leastUsedWord } = useWord();

  return (
    <div className={styles}>
      <h3>leastUsedWord</h3>
      <ul className="p-4">
        {/* Looping through the 'leastUsedWord' array to render each item */}
        {leastUsedWord.map((e) => {
          // Rendering each word's key and value in an <li> element
          // 'key' is used for efficient rendering in React
          return (
            <li key={e.key} className="flex justify-between">
              <h4>{e.key}:</h4>
              <span>{e.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
