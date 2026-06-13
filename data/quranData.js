export const paraList = Array.from({ length: 30 }, (_, index) => {
  const number = index + 1;
  return {
    id: number,
    name: `Para ${number}`,
    banglaName: `পারা ${number}`,
    range: "Hafezi Quran para based reading",
  };
});

export const fallbackSurahs = [
  {
    id: 1,
    name: "Al-Fatihah",
    arabicName: "الفاتحة",
    verses: 7,
    type: "Meccan",
  },
  {
    id: 2,
    name: "Al-Baqarah",
    arabicName: "البقرة",
    verses: 286,
    type: "Medinan",
  },
  {
    id: 3,
    name: "Aal-i-Imraan",
    arabicName: "آل عمران",
    verses: 200,
    type: "Medinan",
  },
  {
    id: 4,
    name: "An-Nisaa",
    arabicName: "النساء",
    verses: 176,
    type: "Medinan",
  },
];
