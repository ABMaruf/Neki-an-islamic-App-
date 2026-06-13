import AsyncStorage from "@react-native-async-storage/async-storage";
import { fallbackSurahs } from "../data/quranData";

const API_BASE = "https://api.alquran.cloud/v1";
const ARABIC_EDITION = "quran-uthmani";
const BANGLA_EDITION = "bn.bengali";

const cacheKey = (key) => `neki:quran:${key}`;

const readCache = async (key) => {
  try {
    const value = await AsyncStorage.getItem(cacheKey(key));
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

const writeCache = async (key, value) => {
  try {
    await AsyncStorage.setItem(cacheKey(key), JSON.stringify(value));
  } catch {
    // Cache failure should not block reading.
  }
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  const payload = await response.json();

  if (!response.ok || payload.code >= 400) {
    throw new Error(payload?.data || payload?.status || "Quran request failed");
  }

  return payload.data;
};

export const getSurahList = async () => {
  const key = "surahs";
  const cached = await readCache(key);
  if (cached?.length) {
    return cached;
  }

  try {
    const data = await fetchJson(`${API_BASE}/surah`);
    const surahs = data.map((item) => ({
      id: item.number,
      name: item.englishName,
      arabicName: item.name,
      verses: item.numberOfAyahs,
      type: item.revelationType,
    }));

    await writeCache(key, surahs);
    return surahs;
  } catch {
    return fallbackSurahs;
  }
};

export const getSurahWithBangla = async (surahId) => {
  const key = `surah:${surahId}:arabic-bangla`;
  const cached = await readCache(key);
  if (cached?.ayahs?.length) {
    return cached;
  }

  const data = await fetchJson(
    `${API_BASE}/surah/${surahId}/editions/${ARABIC_EDITION},${BANGLA_EDITION}`
  );

  const arabic = data[0];
  const bangla = data[1];
  const ayahs = arabic.ayahs.map((ayah, index) => ({
    number: ayah.numberInSurah,
    globalNumber: ayah.number,
    arabic: ayah.text,
    bangla: bangla?.ayahs?.[index]?.text || "",
  }));

  const result = {
    mode: "translation",
    id: arabic.number,
    name: arabic.englishName,
    arabicName: arabic.name,
    verses: ayahs.length,
    ayahs,
  };

  await writeCache(key, result);
  return result;
};

export const getParaArabic = async (paraId) => {
  const key = `para:${paraId}:arabic`;
  const cached = await readCache(key);
  if (cached?.ayahs?.length) {
    return cached;
  }

  const data = await fetchJson(`${API_BASE}/juz/${paraId}/${ARABIC_EDITION}`);
  const ayahs = data.ayahs.map((ayah) => ({
    number: ayah.numberInSurah,
    globalNumber: ayah.number,
    surahNumber: ayah.surah.number,
    surahName: ayah.surah.englishName,
    arabicName: ayah.surah.name,
    arabic: ayah.text,
  }));

  const result = {
    mode: "hafezi",
    id: paraId,
    name: `Para ${paraId}`,
    verses: ayahs.length,
    ayahs,
  };

  await writeCache(key, result);
  return result;
};
