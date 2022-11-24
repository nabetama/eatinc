import React, { FC } from "react";

import Clear from "./Clear";

const NGWord: FC<{
  words: string[];
  updateWords: (words: string[]) => void;
}> = ({ words, updateWords }) => {
  return (
    <>
      <p>Registerd Words</p>
      <ul>
        {words?.map((word, i) => {
          return <li key={i}>{word}</li>;
        })}
      </ul>
      <Clear words={words} updateWords={updateWords} />
    </>
  );
};

export default NGWord;
