let keys: string[] = [];

const isSafeWord = async (typed: string): Promise<[boolean, string]> => {
  const result = await chrome.storage.local.get("eatinc");

  let isSafe = true;
  let matchedWord = "";

  result?.eatinc?.forEach((ngWord: string) => {
    if (typed.includes(ngWord)) {
      isSafe = false;
      matchedWord = ngWord;
    }
  });

  return [isSafe, matchedWord];
};

const handleKeyPress = async (e: KeyboardEvent) => {
  if (e.defaultPrevented) {
    return;
  }
  let handled = false;

  if (e.key !== undefined) {
    handled = true;
  }

  if (handled) {
    if (keys.length > 32) {
      keys.shift();
    }
  }

  if (e.key.match(/^[A-Za-z0-9]$/)) {
    keys.push(e.key.toLowerCase());
  }

  const typed = keys.join("");

  const [isSafe, ngWord] = await isSafeWord(typed);

  if (!isSafe) {
    alert(
      "You typed " +
        "[ " +
        typed +
        " ] is includes NG Word: [ " +
        ngWord +
        " ] "
    );
    keys = [];
  }
};

window.addEventListener("keydown", handleKeyPress, false);
