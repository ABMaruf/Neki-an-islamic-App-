import { supabase } from "./supabase";
import { duaCategories as fallbackDuaCategories } from "../data/duaData";

const iconMap = {
  quran: require("../assets/quran.png"),
  couple: require("../assets/couple.png"),
  beads: require("../assets/-emoji-prayer-beads.png"),
  shield: require("../assets/-icon-shieldcheck.png"),
  healing: require("../assets/-icon-agriculture.png"),
  prayer: require("../assets/pray.png"),
  sleep: require("../assets/-icon-bed.png"),
  guidance: require("../assets/direction-board.png"),
  hardship: require("../assets/-emoji-hourglass-done.png"),
};

const fallbackIcon = iconMap.quran;

const withIcon = (category) => ({
  ...category,
  icon: iconMap[category.icon_key || category.iconKey] || category.icon || fallbackIcon,
});

const normalizeDua = (dua) => ({
  id: dua.id,
  title: dua.title,
  reference: dua.reference,
  arabic: dua.arabic,
  transliteration: dua.transliteration,
  bangla: dua.bangla,
  info: dua.info,
});

const normalizeCategory = (category, duas) =>
  withIcon({
    id: category.id,
    title: category.title,
    subtitle: category.subtitle,
    icon_key: category.icon_key,
    duas: duas.map(normalizeDua),
  });

export const loadDuaCategories = async () => {
  const { data: categories, error: categoryError } = await supabase
    .from("dua_categories")
    .select("id,title,subtitle,icon_key,sort_order")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (categoryError || !categories?.length) {
    return fallbackDuaCategories.map(withIcon);
  }

  const categoryIds = categories.map((category) => category.id);
  const { data: duas, error: duaError } = await supabase
    .from("duas")
    .select(
      "id,category_id,title,reference,arabic,transliteration,bangla,info,sort_order"
    )
    .in("category_id", categoryIds)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (duaError || !duas?.length) {
    return fallbackDuaCategories.map(withIcon);
  }

  return categories.map((category) =>
    normalizeCategory(
      category,
      duas.filter((dua) => dua.category_id === category.id)
    )
  );
};

export const getDuaCategoryById = (categories, categoryId) =>
  categories.find((category) => category.id === categoryId) || categories[0];
