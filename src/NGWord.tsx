import React from "react";

const NGWord = (props: { words: string[] }) => {
  return (
    <>
      <p>Registerd Words</p>
      <ul>
        {props.words?.map((word, i) => {
          return <li key={i}>{word}</li>;
        })}
      </ul>
    </>
  );
};

export default NGWord;
