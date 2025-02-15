function wordCounter(string) {
  const array = string.split(" ");
  const object = {
    temp: " ",
  };
  for (const word of array) {
    for (const key in object) {
      if (!Object.keys(object).includes(word)) {
        object[word] = 0;
      }
    }
    if (Object.keys(object).includes(word)) {
      object[word] = object[word] + 1;
    }
  }
  delete object.temp;
  return object;
}

const sentence =
  "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";
const result = wordCounter(sentence);
console.log(result);
