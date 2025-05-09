import { useWord } from "../context/WordContext";
export default function MainContainer() {
  const { Data, bookTitle, searchedWord } = useWord();

  const renderWithBold = (text, word) => {
    if (!word) return text;

    // Preserve the original text formatting by splitting into lines
    const lines = text.split(/\r?\n/);

    return lines.map((line, index) => {
      // For each line, apply the bold styling to the searched word
      const regex = new RegExp(`(${word})`, "gi");

      const formattedLine = line.split(regex).map((part, i) => {
        return part.toLowerCase() === word.toLowerCase() ? (
          <strong key={i} className="bg-amber-400">
            {part}
          </strong>
        ) : (
          part
        );
      });

      return (
        <div key={index}>
          {formattedLine}
          <br />
        </div>
      );
    });
  };
  return (
    <div className="flex flex-col gap-y-8">
      <img
        className="w-[300px]"
        src="/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0.png"
        alt="books"
      />
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-3xl font-medium">{bookTitle}</h2>
        <div className="border-t-1 border-gray-400 my-2">
          <div className="mt-4 h-[30rem] overflow-y-auto hide-scrollbar">
            {Data ? (
              <div className="whitespace-pre-wrap">
                {renderWithBold(Data, searchedWord)}
              </div>
            ) : (
              "`Select a book on the right`"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
