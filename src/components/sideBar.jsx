import { useState } from "react";
import { useWord } from "../context/WordContext";
import Button from "./button";
import LeastUsedWord from "./leastUsedWord";
import MostUsedWord from "./mostUsedWord";

export default function SideBar() {
  // Destructuring the 'bootBooks' and 'SearchWord' functions from the WordContext
  const { bootBooks, SearchWord } = useWord();

  // State to store the search word input
  const [word, setWord] = useState("");

  return (
    <div className="flex flex-col justify-between h-screen gap-y-4">
      <div className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-medium">Search</h3>
        <div className="p-2 my-4 border-t-1 border-gray-400">
          <input
            placeholder="search"
            className="border-[1px] rounded-md mb-2 p-2"
            onChange={(e) => setWord(e.target.value)}
          />
          <Button
            text="Search"
            styles="p-2 rounded-md cursor-pointer bg-[#297FB8]"
            click={() => SearchWord(word)}
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-md flex flex-col gap-y-1">
        <Button
          styles="hover:text-blue-400 cursor-pointer"
          text="LOTR"
          click={() => bootBooks("LOTR")}
        />

        <Button
          styles="hover:text-blue-400 cursor-pointer"
          text="Alice in Wonderland"
          click={() => bootBooks("AliceinWonderland")}
        />

        <Button
          styles="hover:text-blue-400 cursor-pointer"
          text="Jekyll And Hyde"
          click={() => bootBooks("JekyllAndHyde")}
        />
      </div>
      <MostUsedWord styles="bg-white p-4 rounded-md" />
      <LeastUsedWord styles="bg-white p-4 rounded-md" />
    </div>
  );
}
