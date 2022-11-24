import React from "react";

const handleClick = (
  words: string[],
  updateWords: (words: string[]) => void
) => {
  chrome.storage.local.remove("eatinc");
  updateWords([]);
};

const Clear: React.FC<{
  words: string[];
  updateWords: (words: string[]) => void;
}> = ({ words, updateWords }) => {
  return (
    <div className="footer">
      <button
        type="button"
        className="cleare"
        onClick={() => handleClick(words, updateWords)}
      >
        clear
      </button>
    </div>
  );
};

export default Clear;
