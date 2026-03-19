const input = document.getElementById("input");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const pasteBtn = document.getElementById("pasteBtn");

const independentVowels = {
  RRu: "ୠ",
  Ru: "ଋ",
  a: "ଅ",
  aa: "ଆ",
  i: "ଇ",
  ii: "ଈ",
  u: "ଉ",
  uu: "ଊ",
  e: "ଏ",
  ai: "ଐ",
  o: "ଓ",
  au: "ଔ"
};

const vowelSigns = {
  a: "",
  aa: "ା",
  i: "ି",
  ii: "ୀ",
  u: "ୁ",
  uu: "ୂ",
  e: "େ",
  ai: "ୈ",
  o: "ୋ",
  au: "ୌ"
};

const specialSyllables = {
  kRu: "କୃ",
  gRu: "ଗୃ",
  pRu: "ପୃ",
  bRu: "ବୃ",
  dRu: "ଦୃ",
  tRu: "ତୃ",
  mRu: "ମୃ",
  nRu: "ନୃ"
};

const specialSigns = {
  MM: "ଁ",
  M: "ଂ"
};

const consonants = {
  kh: "ଖ",
  gh: "ଘ",
  chh: "ଛ",
  ch: "ଚ",
  jh: "ଝ",
  th: "ଥ",
  dh: "ଧ",
  Dh: "ଢ",
  ph: "ଫ",
  bh: "ଭ",
  sh: "ଶ",
  Sh: "ଷ",

  ny: "ନ୍ୟ",

  k: "କ",
  g: "ଗ",
  Ng: "ଙ",
  c: "ଚ",
  j: "ଜ",
  t: "ତ",
  T: "ଟ",
  d: "ଦ",
  D: "ଡ",
  n: "ନ",
  N: "ଣ",
  p: "ପ",
  b: "ବ",
  m: "ମ",
  y: "ୟ",
  Y: "ଯ",
  r: "ର",
  l: "ଲ",
  L: "ଳ",
  w: "ୱ",
  v: "ଭ",
  s: "ସ",
  h: "ହ"
};

const conjuncts = {
  shri: "ଶ୍ରୀ",
  ksh: "କ୍ଷ",
  jna: "ଜ୍ଞ",

  rDh: "ଢ଼",
  rD: "ଡ଼",

  Nta: "ଣ୍ଟ",
  nta: "ନ୍ତ",
  ndh: "ନ୍ଧ",
  nda: "ନ୍ଦ",
  nkh: "ଙ୍ଖ",
  nka: "ଙ୍କ",
  nk: "ଙ୍କ",
  mbh: "ମ୍ଭ",
  mb: "ମ୍ବ",
  mp: "ମ୍ପ",
  nj: "ଞ୍ଜ",

  shr: "ଶ୍ର",
  shn: "ଷ୍ଣ",
  sch: "ଶ୍ଚ",
  ryya: "ର୍ଯ୍ୟ",
  rya: "ର୍ଯ",

  kra: "କ୍ର",
  kri: "କ୍ରି",
  kru: "କ୍ରୁ",
  kre: "କ୍ରେ",
  kro: "କ୍ରୋ",

  gra: "ଗ୍ର",
  gri: "ଗ୍ରି",
  gru: "ଗ୍ରୁ",

  pra: "ପ୍ର",
  pri: "ପ୍ରି",
  pru: "ପ୍ରୁ",

  bra: "ବ୍ର",
  bri: "ବ୍ରି",
  bru: "ବ୍ରୁ",

  dra: "ଦ୍ର",
  dri: "ଦ୍ରି",
  dru: "ଦ୍ରୁ",

  tra: "ତ୍ର",
  tri: "ତ୍ରି",
  tru: "ତ୍ରୁ",

  sx: "ସ୍"
};

const tokenOrder = [
  "shri",
  "ksh",
  "jna",

  "RRu",
  "Ru",

  "kRu",
  "gRu",
  "pRu",
  "bRu",
  "dRu",
  "tRu",
  "mRu",
  "nRu",

  "rDh",
  "rD",

  "sx",
  "x",
  "MM",
  "M",

  "ryya",
  "sch",

  "Nta",
  "ndh",
  "nda",
  "nta",
  "nkh",
  "nka",
  "nk",
  "mbh",
  "mb",
  "mp",
  "nj",

  "shr",
  "shn",
  "rya",

  "kra",
  "kri",
  "kru",
  "kre",
  "kro",

  "gra",
  "gri",
  "gru",

  "pra",
  "pri",
  "pru",

  "bra",
  "bri",
  "bru",

  "dra",
  "dri",
  "dru",

  "tra",
  "tri",
  "tru",

  "chh",
  "kh",
  "gh",
  "ch",
  "jh",
  "th",
  "dh",
  "Dh",
  "Th",
  "ph",
  "bh",
  "sh",
  "Sh",
  "ny",

  "aa",
  "ii",
  "uu",
  "ai",
  "au",
  "a",
  "i",
  "u",
  "e",
  "o",

  "sx",
  "MM",
  "M",
  "Ny",
  "Ng",

  "k",
  "g",
  "c",
  "j",
  "t",
  "T",
  "d",
  "D",
  "n",
  "N",
  "p",
  "b",
  "m",
  "y",
  "Y",
  "r",
  "l",
  "L",
  "w",
  "v",
  "s",
  "h"
];

const vowelTokens = ["aa", "ii", "uu", "ai", "au", "a", "i", "u", "e", "o"];

function isRomanLetter(ch) {
  return /[A-Za-z]/.test(ch);
}

function getMatchedToken(text, index) {
  for (const token of tokenOrder) {
    if (text.startsWith(token, index)) {
      return token;
    }
  }
  return null;
}

function getNextVowelToken(text, index) {
  for (const v of vowelTokens) {
    if (text.startsWith(v, index)) {
      return v;
    }
  }
  return null;
}

function isConsonantLikeToken(token) {
  return !!(consonants[token] || conjuncts[token] || specialSyllables[token] || token === "Ny");
}

function transliterateWord(word) {
  let i = 0;
  let result = "";

  while (i < word.length) {
    const token = getMatchedToken(word, i);

    if (!token) {
      i++;
      continue;
    }

    if (token === "Ny") {
      result += "ଞ";
      i += 2;
      continue;
    }

    if (token === "x") {
        result += "୍";
        i += 1;
        continue;
    }
    if (token === "Th") {
      const nextVowel = getNextVowelToken(word, i + 2);
      if (nextVowel) {
        result += "ଠ" + vowelSigns[nextVowel];
        i += 2 + nextVowel.length;
      } else {
        const nextToken = getMatchedToken(word, i + 2);
        result += nextToken && isConsonantLikeToken(nextToken) ? "ଠ୍" : "ଠ";
        i += 2;
      }
      continue;
    }

    if (specialSigns[token]) {
      result += specialSigns[token];
      i += token.length;
      continue;
    }

    if (specialSyllables[token]) {
      result += specialSyllables[token];
      i += token.length;
      continue;
    }

    if (independentVowels[token]) {
      result += independentVowels[token];
      i += token.length;
      continue;
    }

    if (conjuncts[token]) {
      const base = conjuncts[token];
      const nextVowel = getNextVowelToken(word, i + token.length);

      const completeSyllables = new Set([
        "shri",
        "kri", "kru", "kre", "kro",
        "gri", "gru",
        "pri", "pru",
        "bri", "bru",
        "dri", "dru",
        "tri", "tru"
      ]);

      if (!completeSyllables.has(token) && nextVowel) {
        result += base + vowelSigns[nextVowel];
        i += token.length + nextVowel.length;
      } else {
        result += base;
        i += token.length;
      }
      continue;
    }

    if (consonants[token]) {
      const base = consonants[token];
      const nextVowel = getNextVowelToken(word, i + token.length);

      if (nextVowel) {
        result += base + vowelSigns[nextVowel];
        i += token.length + nextVowel.length;
      } else {
        const nextToken = getMatchedToken(word, i + token.length);
        if (nextToken && isConsonantLikeToken(nextToken)) {
          result += base + "୍";
        } else {
          result += base;
        }
        i += token.length;
      }
      continue;
    }

    i++;
  }

  result = result
    .replace(/ଅା/g, "ଆ")
    .replace(/ଅି/g, "ଇ")
    .replace(/ଅୀ/g, "ଈ")
    .replace(/ଅୁ/g, "ଉ")
    .replace(/ଅୂ/g, "ଊ")
    .replace(/ଅେ/g, "ଏ")
    .replace(/ଅୈ/g, "ଐ")
    .replace(/ଅୋ/g, "ଓ")
    .replace(/ଅୌ/g, "ଔ")
    .replace(/ଶ୍ରି/g, "ଶ୍ରୀ")
    .replace(/କ୍ରିଷ୍ନ/g, "କ୍ରିଷ୍ଣ")
    .replace(/କ୍ରିଶ୍ନ/g, "କ୍ରିଷ୍ଣ")
    .replace(/କ୍ରୁଷ୍ନ/g, "କ୍ରୁଷ୍ଣ")
    .replace(/କ୍ରୁଶ୍ନ/g, "କ୍ରୁଷ୍ଣ")
    .replace(/ନମହ/g, "ନମଃ")
    .replace(/ଶହ/g, "ଶଃ")
    .replace(/ସହ/g, "ସଃ")
    .replace(/ମହ/g, "ମଃ");

  return result;
}

function transliterateText(text) {
  let result = "";
  let currentWord = "";

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (isRomanLetter(ch)) {
      currentWord += ch;
    } else {
      if (currentWord) {
        result += transliterateWord(currentWord);
        currentWord = "";
      }
      result += ch;
    }
  }

  if (currentWord) {
    result += transliterateWord(currentWord);
  }

  return result;
}

input.addEventListener("input", () => {
  output.textContent = transliterateText(input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
  input.focus();
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    copyBtn.textContent = "Copied";
    setTimeout(() => {
      copyBtn.textContent = "Copy Output";
    }, 1000);
  } catch {
    copyBtn.textContent = "Copy failed";
    setTimeout(() => {
      copyBtn.textContent = "Copy Output";
    }, 1000);
  }
});

pasteBtn.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    input.value += text;
    output.textContent = transliterateText(input.value);
    input.focus();
  } catch {
    pasteBtn.textContent = "Paste blocked";
    setTimeout(() => {
      pasteBtn.textContent = "Paste";
    }, 1000);
  }
});