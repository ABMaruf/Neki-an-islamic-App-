insert into public.dua_categories (id, title, subtitle, icon_key, sort_order)
values
  ('quranic', 'Quranic Duas', 'Duas directly from the Quran', 'quran', 1),
  ('parents-family', 'Parents & Family', 'Mercy, family, and children', 'couple', 2)
on conflict (id) do update
set
  title = excluded.title,
  subtitle = excluded.subtitle,
  icon_key = excluded.icon_key,
  sort_order = excluded.sort_order,
  updated_at = now();

insert into public.duas (
  id,
  category_id,
  title,
  reference,
  arabic,
  transliteration,
  bangla,
  info,
  sort_order
)
values
  (
    'both-worlds',
    'quranic',
    'Good in This World and Hereafter',
    'Quran 2:201',
    'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    'রব্বানা আতিনা ফিদ্দুনইয়া হাসানাতাও ওয়া ফিল আখিরাতি হাসানাতাও ওয়া কিনা আযাবান্নার',
    'হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন, আখিরাতেও কল্যাণ দিন এবং আগুনের শাস্তি থেকে রক্ষা করুন।',
    'দুনিয়া ও আখিরাতের সামগ্রিক কল্যাণের জন্য কুরআনিক দোয়া।',
    1
  ),
  (
    'parents-mercy',
    'parents-family',
    'Mercy for Parents',
    'Quran 17:24',
    'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    'রব্বির হামহুমা কামা রব্বায়ানি সগীরা',
    'হে আমার রব, তারা শৈশবে আমাকে যেমন লালন-পালন করেছেন, আপনি তাদের প্রতি তেমনি দয়া করুন।',
    'পিতা-মাতার জন্য রহমত কামনার দোয়া।',
    1
  )
on conflict (id) do update
set
  category_id = excluded.category_id,
  title = excluded.title,
  reference = excluded.reference,
  arabic = excluded.arabic,
  transliteration = excluded.transliteration,
  bangla = excluded.bangla,
  info = excluded.info,
  sort_order = excluded.sort_order,
  updated_at = now();
