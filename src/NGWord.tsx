import React, { FC } from "react";

import "./NGWord.css";
import Clear from "./Clear";

const NGWord: FC<{
  words: string[];
  updateWords: (words: string[]) => void;
}> = ({ words, updateWords }) => {
  return (
    <section>
      <div>
        <h2>Registerd</h2>
        <ul className="chech-list">
          {words?.map((word, i) => {
            return <li key={i}>{word}</li>;
          })}
        </ul>
        <Clear words={words} updateWords={updateWords} />
      </div>
    </section>
  );
};

export default NGWord;
