let keys: string[] = [];

const isSafeWord = async (typed: string) => {
  const result = await chrome.storage.local.get("eatinc");

  let isSafe = true;

  result?.eatinc?.forEach((ngWord: string) => {
    if (typed.includes(ngWord)) {
      isSafe = false;
    }
  });

  return isSafe;
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

  console.log(typed);

  const isSafe = await isSafeWord(typed);

  if (!isSafe) {
    alert("There might be NG word in this string: [ " + typed + " ]");
    keys = [];
  }
};

window.addEventListener("keydown", handleKeyPress, false);
