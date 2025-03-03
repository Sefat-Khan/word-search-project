import React, { useContext, useEffect, useState } from "react";

// Creating a context for managing word-related data across the app
const WordContext = React.createContext();

// Custom hook to access WordContext
export function useWord() {
  return useContext(WordContext);
}

// WordProvider component that manage data and word related analysis
export default function WordProvider({ children }) {
  const [Data, setData] = useState(""); // Store book content as plain text
  const [bookTitle, setBookTitle] = useState(""); // Store the selected book title
  const [searchedWord, setSearchedWord] = useState(""); // Store the user-searched word
  const [mostUsedWord, setMostUsedWord] = useState([]); // Store the top 5 word
  const [leastUsedWord, setLeastUsedWord] = useState([]); // Store the least 5 word

  // function to load the book text data from the `/book/` directory
  async function bootBooks(filename) {
    setBookTitle(filename); // Update book title state
    try {
      let response = await fetch(`books/${filename}.txt`); // Fetching a plain text file
      let text = await response.text(); // Read as text instead of JSON
      setData(text.replace(/<\/?[^>]+(>|$)/g, "")); // store book content into a state
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }

  // Function to set the searched word
  const SearchWord = (newWord) => {
    setSearchedWord(newWord);
  };

  // Effect runs when book data is updated to analyze word frequency
  useEffect(() => {
    if (Data) {
      getDocStatus(Data); // Run only when Data changes
    }
  }, [Data]);

  // Function to analyze word frequency in the book content
  function getDocStatus(data) {
    let words = data.toLowerCase(); // convert text to lowercase for uniformity
    let wordArray = words.match(/\b\S+\b/g); // Extract words using regex

    let filteredWord = filterWord(wordArray); // remove common words
    let wordObject = {}; // initialize a object to store word count

    // Function to count each word
    filteredWord.map((e) => {
      if (wordObject.hasOwnProperty(e) === true) {
        wordObject[e]++;
      } else {
        wordObject[e] = 1;
      }
    });

    // Convert word count obj into array
    let countedWord = Object.entries(wordObject).map(([key, value]) => ({
      key,
      value,
    }));

    // sort words by frequency in descending order
    let higherCountWord = countedWord.sort((a, b) => b.value - a.value);

    // Store the top 5 and least 5 words
    setMostUsedWord(higherCountWord.slice(0, 5));
    setLeastUsedWord(higherCountWord.slice(-5));
  }

  // Function to filter out common words (stopWords) from the word list
  function filterWord(words) {
    const commonWord = [
      "a",
      "able",
      "about",
      "across",
      "after",
      "all",
      "almost",
      "also",
      "am",
      "among",
      "an",
      "and",
      "any",
      "are",
      "as",
      "at",
      "be",
      "because",
      "been",
      "but",
      "by",
      "can",
      "cannot",
      "could",
      "dear",
      "did",
      "do",
      "does",
      "either",
      "else",
      "ever",
      "every",
      "for",
      "from",
      "get",
      "got",
      "had",
      "has",
      "have",
      "he",
      "her",
      "hers",
      "him",
      "his",
      "how",
      "however",
      "i",
      "if",
      "in",
      "into",
      "is",
      "it",
      "its",
      "just",
      "least",
      "let",
      "like",
      "likely",
      "may",
      "me",
      "might",
      "most",
      "must",
      "my",
      "neither",
      "no",
      "nor",
      "not",
      "of",
      "off",
      "often",
      "on",
      "only",
      "or",
      "other",
      "our",
      "own",
      "rather",
      "said",
      "say",
      "says",
      "she",
      "should",
      "since",
      "so",
      "some",
      "than",
      "that",
      "the",
      "their",
      "them",
      "then",
      "there",
      "these",
      "they",
      "this",
      "tis",
      "to",
      "too",
      "twas",
      "us",
      "wants",
      "was",
      "we",
      "were",
      "what",
      "when",
      "where",
      "which",
      "while",
      "who",
      "whom",
      "why",
      "will",
      "with",
      "would",
      "yet",
      "you",
      "your",
      "ain't",
      "aren't",
      "can't",
      "could've",
      "couldn't",
      "didn't",
      "doesn't",
      "don't",
      "hasn't",
      "he'd",
      "he'll",
      "he's",
      "how'd",
      "how'll",
      "how's",
      "i'd",
      "i'll",
      "i'm",
      "i've",
      "isn't",
      "it's",
      "might've",
      "mightn't",
      "must've",
      "mustn't",
      "shan't",
      "she'd",
      "she'll",
      "she's",
      "should've",
      "shouldn't",
      "that'll",
      "that's",
      "there's",
      "they'd",
      "they'll",
      "they're",
      "they've",
      "wasn't",
      "we'd",
      "we'll",
      "we're",
      "weren't",
      "what'd",
      "what's",
      "when'd",
      "when'll",
      "when's",
      "where'd",
      "where'll",
      "where's",
      "who'd",
      "who'll",
      "who's",
      "why'd",
      "why'll",
      "why's",
      "won't",
      "would've",
      "wouldn't",
      "you'd",
      "you'll",
      "you're",
      "you've",
    ];

    let filteredWords = words.filter(
      (word) => !commonWord.includes(word.toLowerCase())
    );

    return filteredWords;
  }

  // Context value provider to components
  const value = {
    Data,
    bootBooks,
    SearchWord,
    mostUsedWord,
    leastUsedWord,
    bookTitle,
    searchedWord,
  };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
}
