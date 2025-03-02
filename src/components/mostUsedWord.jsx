import { useWord } from "../context/WordContext";

export default function mostUsedWord({ styles }) {
  // Using the custom hook 'useWord' to access the mostUsedWord data from WordContext
  const { mostUsedWord } = useWord();

  return (
    <div className={styles}>
      <h3>mostUsedWord</h3>
      <ul className="p-4">
        {/* Looping through the 'mostUsedWord' array to render each item */}
        {mostUsedWord.map((e) => {
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
