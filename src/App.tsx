import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import NGWord from "./NGWord";
import "./App.css";

interface IFormInput {
  ngWord: string;
}

function App() {
  const [words, setWords] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<IFormInput>();

  const updateWords = (words: string[]): void => setWords(words);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!data.ngWord) {
      return;
    }

    if (words?.includes(data.ngWord)) {
      alert(data.ngWord + " is already registerd");
      return;
    }

    setWords([...(words || []), data.ngWord]);

    chrome.storage.local.set(
      { eatinc: [...(words || []), data.ngWord.toLowerCase()] },
      () => {
        alert("done");
      }
    );
  };

  const didEffect = React.useRef(false);
  useEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;
      chrome.storage.local.get("eatinc", (result) => {
        setWords(result.eatinc);
      });
    }
  }, [words]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Register NG Word</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("ngWord")} />
          <input type="submit" value="Register" />
        </form>
      </header>

      <NGWord words={words} updateWords={updateWords} />
    </div>
  );
}

export default App;
