-- Full Dua seed for Neki.
-- This replaces the current sample duas for these categories, then inserts
-- 10 categories and 10 duas per category.

with category_seed (id, title, subtitle, icon_key, sort_order) as (
  values
    ('quranic', 'Quranic Duas', 'Duas directly from the Quran', 'quran', 1),
    ('parents-family', 'Parents & Family', 'Mercy, family, and children', 'couple', 2),
    ('morning-evening', 'Morning & Evening', 'Daily protection and remembrance', 'beads', 3),
    ('protection', 'Protection', 'Safety from harm and evil', 'shield', 4),
    ('forgiveness', 'Forgiveness', 'Tawbah and mercy from Allah', 'beads', 5),
    ('healing', 'Healing', 'Illness, recovery, and comfort', 'healing', 6),
    ('prayer', 'Prayer', 'Before and after salah', 'prayer', 7),
    ('sleep', 'Sleep', 'Before sleep and after waking', 'sleep', 8),
    ('knowledge-guidance', 'Knowledge & Guidance', 'Learning and right decisions', 'guidance', 9),
    ('hardship', 'Hardship & Relief', 'Patience, anxiety, and relief', 'hardship', 10)
)
insert into public.dua_categories (id, title, subtitle, icon_key, sort_order)
select id, title, subtitle, icon_key, sort_order
from category_seed
on conflict (id) do update
set
  title = excluded.title,
  subtitle = excluded.subtitle,
  icon_key = excluded.icon_key,
  sort_order = excluded.sort_order,
  is_active = true,
  updated_at = now();

delete from public.duas
where category_id in (
  'quranic',
  'parents-family',
  'morning-evening',
  'protection',
  'forgiveness',
  'healing',
  'prayer',
  'sleep',
  'knowledge-guidance',
  'hardship'
);

with dua_bank (
  dua_key,
  title,
  reference,
  arabic,
  transliteration,
  bangla,
  info
) as (
  values
    (
      'both-worlds',
      'Good in This World and Hereafter',
      'Quran 2:201',
      'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      'রব্বানা আতিনা ফিদ্দুনইয়া হাসানাতাও ওয়া ফিল আখিরাতি হাসানাতাও ওয়া কিনা আযাবান্নার',
      'হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন, আখিরাতেও কল্যাণ দিন এবং আগুনের শাস্তি থেকে রক্ষা করুন।',
      'দুনিয়া ও আখিরাতের সামগ্রিক কল্যাণের জন্য কুরআনিক দোয়া।'
    ),
    (
      'adam-forgiveness',
      'Forgiveness and Mercy',
      'Quran 7:23',
      'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      'রব্বানা যলামনা আনফুসানা ওয়া ইল্লাম তাগফির লানা ওয়া তারহামনা লানাকূনান্না মিনাল খাসিরীন',
      'হে আমাদের রব, আমরা নিজেদের প্রতি জুলুম করেছি। আপনি যদি ক্ষমা ও দয়া না করেন, তবে আমরা ক্ষতিগ্রস্ত হব।',
      'আদম (আ.) ও হাওয়া (আ.)-এর তাওবার দোয়া।'
    ),
    (
      'knowledge',
      'Increase in Knowledge',
      'Quran 20:114',
      'رَبِّ زِدْنِي عِلْمًا',
      'রব্বি যিদনী ইলমা',
      'হে আমার রব, আমার জ্ঞান বৃদ্ধি করুন।',
      'ইলম অর্জনের আগে ও নিয়মিত পড়ার দোয়া।'
    ),
    (
      'parents-mercy',
      'Mercy for Parents',
      'Quran 17:24',
      'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      'রব্বির হামহুমা কামা রব্বায়ানি সগীরা',
      'হে আমার রব, তারা শৈশবে আমাকে যেমন লালন-পালন করেছেন, আপনি তাদের প্রতি তেমনি দয়া করুন।',
      'পিতা-মাতার জন্য রহমত কামনার দোয়া।'
    ),
    (
      'parents-forgiveness',
      'Forgiveness for Parents',
      'Quran 14:41',
      'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
      'রব্বানাগফিরলী ওয়া লিওয়ালিদাইয়া ওয়া লিল মুমিনীনা ইয়াওমা ইয়াকুমুল হিসাব',
      'হে আমাদের রব, হিসাবের দিন আমাকে, আমার পিতা-মাতাকে এবং মুমিনদের ক্ষমা করুন।',
      'নিজে, পিতা-মাতা ও মুমিনদের জন্য ক্ষমা প্রার্থনা।'
    ),
    (
      'straight-path',
      'Straight Path',
      'Quran 1:6',
      'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      'ইহদিনাস সিরাতাল মুস্তাকীম',
      'আমাদের সরল পথে পরিচালিত করুন।',
      'হেদায়েতের জন্য সূরা ফাতিহার দোয়া।'
    ),
    (
      'mercy-guidance',
      'Mercy and Right Guidance',
      'Quran 18:10',
      'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
      'রব্বানা আতিনা মিল্লাদুনকা রহমাতাও ওয়া হাইয়ি লানা মিন আমরিনা রশাদা',
      'হে আমাদের রব, আপনার পক্ষ থেকে আমাদের রহমত দিন এবং আমাদের কাজে সঠিক পথের ব্যবস্থা করুন।',
      'কঠিন অবস্থায় সঠিক সিদ্ধান্তের জন্য দোয়া।'
    ),
    (
      'patience',
      'Patience and Firmness',
      'Quran 2:250',
      'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',
      'রব্বানা আফরিগ আলাইনা সাবরাও ওয়া সাব্বিত আকদামানা',
      'হে আমাদের রব, আমাদের ওপর ধৈর্য ঢেলে দিন এবং আমাদের পা দৃঢ় রাখুন।',
      'কষ্ট ও সংগ্রামের সময় ধৈর্যের দোয়া।'
    ),
    (
      'yunus',
      'Dua of Yunus (A.)',
      'Quran 21:87',
      'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      'লা ইলাহা ইল্লা আনতা সুবহানাকা ইন্নী কুনতু মিনায যালিমীন',
      'আপনি ছাড়া কোনো ইলাহ নেই। আপনি পবিত্র। নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম।',
      'বিপদ, অনুতাপ ও আল্লাহর দিকে ফেরার দোয়া।'
    ),
    (
      'no-deviation',
      'Keep Hearts Firm',
      'Quran 3:8',
      'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',
      'রব্বানা লা তুযিগ কুলুবানা বা''দা ইয হাদাইতানা ওয়া হাব লানা মিল্লাদুনকা রহমাহ',
      'হে আমাদের রব, আপনি আমাদের হেদায়েত দেওয়ার পর আমাদের অন্তর বাঁকা করবেন না, আপনার পক্ষ থেকে রহমত দিন।',
      'ঈমান ও অন্তরের স্থিরতার জন্য দোয়া।'
    ),
    (
      'house-blessing',
      'Blessed Landing',
      'Quran 23:29',
      'رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ',
      'রব্বি আনযিলনী মুনযালাম মুবারাকাও ওয়া আনতা খাইরুল মুনযিলীন',
      'হে আমার রব, আমাকে বরকতময় স্থানে অবতরণ করান; আপনিই উত্তম অবতরণকারী।',
      'বাসস্থান, সফর বা নতুন শুরুতে বরকতের দোয়া।'
    ),
    (
      'family-comfort',
      'Comfort of Family',
      'Quran 25:74',
      'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
      'রব্বানা হাব লানা মিন আযওয়াজিনা ওয়া যুররিয়্যাতিনা কুররাতা আ''ইউন',
      'হে আমাদের রব, আমাদের স্ত্রী-সন্তানদের আমাদের চোখের শীতলতা বানিয়ে দিন।',
      'পরিবারের শান্তি ও নেক সন্তানের জন্য দোয়া।'
    ),
    (
      'repentance',
      'Accept Repentance',
      'Quran 2:128',
      'وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
      'ওয়া তুব আলাইনা ইন্নাকা আনতাত তাওয়াবুর রহীম',
      'আমাদের তাওবা কবুল করুন। নিশ্চয়ই আপনি তাওবা কবুলকারী, পরম দয়ালু।',
      'নিয়মিত তাওবার জন্য কুরআনিক দোয়া।'
    ),
    (
      'provision',
      'Lawful Provision',
      'Quran 5:114',
      'اللَّهُمَّ رَبَّنَا أَنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ',
      'আল্লাহুম্মা রব্বানা আনযিল আলাইনা মাইদাতাম মিনাস সামা',
      'হে আল্লাহ, আমাদের রব, আসমান থেকে আমাদের জন্য রিজিকের ব্যবস্থা করুন।',
      'হালাল রিজিক ও বরকতের জন্য দোয়া।'
    ),
    (
      'sayyidul-istighfar',
      'Sayyidul Istighfar',
      'Sahih al-Bukhari 6306',
      'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ',
      'আল্লাহুম্মা আনতা রব্বী লা ইলাহা ইল্লা আনতা, খালাকতানী ওয়া আনা আবদুকা',
      'হে আল্লাহ, আপনি আমার রব, আপনি ছাড়া কোনো ইলাহ নেই। আপনি আমাকে সৃষ্টি করেছেন এবং আমি আপনার বান্দা।',
      'ক্ষমা প্রার্থনার শ্রেষ্ঠ দোয়া হিসেবে পরিচিত।'
    ),
    (
      'protection-name',
      'Protection by Allah''s Name',
      'Sunan Abi Dawud 5088; Jami at-Tirmidhi 3388',
      'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      'বিসমিল্লাহিল্লাযী লা ইয়াদুররু মা''আসমিহি শাইউন ফিল আরদি ওয়া লা ফিস সামাই ওয়া হুয়াস সামীউল আলীম',
      'আল্লাহর নামে, যার নামের সাথে আসমান ও জমিনের কোনো কিছু ক্ষতি করতে পারে না। তিনি সর্বশ্রোতা, সর্বজ্ঞ।',
      'সকাল-সন্ধ্যায় তিনবার পড়ার আমল হিসেবে বর্ণিত।'
    ),
    (
      'created-evil',
      'Protection from Created Evil',
      'Sahih Muslim 2709',
      'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      'আউযু বিকালিমাতিল্লাহিত তাম্মাতি মিন শাররি মা খালাক',
      'আমি আল্লাহর পরিপূর্ণ কালিমাসমূহের মাধ্যমে তাঁর সৃষ্টির অনিষ্ট থেকে আশ্রয় চাই।',
      'অনিষ্ট ও ক্ষতি থেকে আশ্রয়ের দোয়া।'
    ),
    (
      'morning-kingdom',
      'Morning Praise',
      'Sahih Muslim 2723',
      'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',
      'আসবাহনা ওয়া আসবাহাল মুলকু লিল্লাহ',
      'আমরা সকালে উপনীত হলাম এবং রাজত্ব আল্লাহর জন্যই।',
      'সকালের যিকর।'
    ),
    (
      'evening-kingdom',
      'Evening Praise',
      'Sahih Muslim 2723',
      'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ',
      'আমসাইনা ওয়া আমসাল মুলকু লিল্লাহ',
      'আমরা সন্ধ্যায় উপনীত হলাম এবং রাজত্ব আল্লাহর জন্যই।',
      'সন্ধ্যার যিকর।'
    ),
    (
      'before-sleep',
      'Before Sleep',
      'Sahih al-Bukhari 6324',
      'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
      'বিসমিকা আল্লাহুম্মা আমূতু ওয়া আহইয়া',
      'হে আল্লাহ, আপনার নামেই আমি মৃত্যুবরণ করি এবং জীবিত হই।',
      'ঘুমানোর আগে পড়ার দোয়া।'
    ),
    (
      'after-waking',
      'After Waking Up',
      'Sahih al-Bukhari 6325',
      'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      'আলহামদু লিল্লাহিল্লাযী আহইয়ানা বা''দা মা আমাতানা ওয়া ইলাইহিন নুশূর',
      'সকল প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত্যু দেওয়ার পর জীবিত করলেন, আর তাঁর কাছেই পুনরুত্থান।',
      'ঘুম থেকে ওঠার পর পড়ার দোয়া।'
    ),
    (
      'after-prayer',
      'After Salah',
      'Sahih Muslim 591',
      'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
      'আল্লাহুম্মা আনতাস সালাম ওয়া মিনকাস সালাম, তাবারাকতা ইয়া যাল জালালি ওয়াল ইকরাম',
      'হে আল্লাহ, আপনি শান্তি, আপনার কাছ থেকেই শান্তি। হে মহিমা ও সম্মানের অধিকারী, আপনি বরকতময়।',
      'ফরজ সালামের পর পড়ার দোয়া/যিকর।'
    ),
    (
      'between-sajdah',
      'Between Two Sajdah',
      'Sunan Abi Dawud 850; Jami at-Tirmidhi 284',
      'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي',
      'রব্বিগফিরলী ওয়ারহামনী ওয়াহদিনী ওয়া আফিনী ওয়ারযুকনী',
      'হে আমার রব, আমাকে ক্ষমা করুন, দয়া করুন, হেদায়েত দিন, নিরাপত্তা দিন এবং রিজিক দিন।',
      'দুই সিজদার মাঝে পড়ার দোয়া।'
    ),
    (
      'healing',
      'Dua for Healing',
      'Sahih al-Bukhari 5743; Sahih Muslim 2191',
      'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي',
      'আল্লাহুম্মা রব্বান্নাস, আযহিবিল বা''স, ইশফি আনতাশ শাফী',
      'হে মানুষের রব আল্লাহ, কষ্ট দূর করুন। আপনি শিফা দিন, আপনিই আরোগ্যদাতা।',
      'অসুস্থ ব্যক্তির জন্য বর্ণিত দোয়া।'
    ),
    (
      'complete-cure',
      'Complete Cure',
      'Sahih al-Bukhari 5743',
      'لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
      'লা শিফা''আ ইল্লা শিফাউকা শিফা''আন লা ইউগাদিরু সাকামা',
      'আপনার শিফা ছাড়া কোনো শিফা নেই; এমন শিফা দিন যা কোনো অসুস্থতা অবশিষ্ট রাখে না।',
      'আরোগ্যের জন্য নববী দোয়ার অংশ।'
    )
),
assignment_seed (category_id, dua_key, sort_order) as (
  values
    ('quranic', 'both-worlds', 1),
    ('quranic', 'adam-forgiveness', 2),
    ('quranic', 'knowledge', 3),
    ('quranic', 'straight-path', 4),
    ('quranic', 'mercy-guidance', 5),
    ('quranic', 'patience', 6),
    ('quranic', 'yunus', 7),
    ('quranic', 'no-deviation', 8),
    ('quranic', 'house-blessing', 9),
    ('quranic', 'family-comfort', 10),

    ('parents-family', 'parents-mercy', 1),
    ('parents-family', 'parents-forgiveness', 2),
    ('parents-family', 'family-comfort', 3),
    ('parents-family', 'house-blessing', 4),
    ('parents-family', 'both-worlds', 5),
    ('parents-family', 'repentance', 6),
    ('parents-family', 'no-deviation', 7),
    ('parents-family', 'provision', 8),
    ('parents-family', 'straight-path', 9),
    ('parents-family', 'mercy-guidance', 10),

    ('morning-evening', 'sayyidul-istighfar', 1),
    ('morning-evening', 'protection-name', 2),
    ('morning-evening', 'created-evil', 3),
    ('morning-evening', 'morning-kingdom', 4),
    ('morning-evening', 'evening-kingdom', 5),
    ('morning-evening', 'both-worlds', 6),
    ('morning-evening', 'straight-path', 7),
    ('morning-evening', 'repentance', 8),
    ('morning-evening', 'no-deviation', 9),
    ('morning-evening', 'provision', 10),

    ('protection', 'protection-name', 1),
    ('protection', 'created-evil', 2),
    ('protection', 'yunus', 3),
    ('protection', 'no-deviation', 4),
    ('protection', 'patience', 5),
    ('protection', 'parents-forgiveness', 6),
    ('protection', 'both-worlds', 7),
    ('protection', 'straight-path', 8),
    ('protection', 'mercy-guidance', 9),
    ('protection', 'house-blessing', 10),

    ('forgiveness', 'adam-forgiveness', 1),
    ('forgiveness', 'sayyidul-istighfar', 2),
    ('forgiveness', 'repentance', 3),
    ('forgiveness', 'parents-forgiveness', 4),
    ('forgiveness', 'yunus', 5),
    ('forgiveness', 'both-worlds', 6),
    ('forgiveness', 'no-deviation', 7),
    ('forgiveness', 'between-sajdah', 8),
    ('forgiveness', 'straight-path', 9),
    ('forgiveness', 'mercy-guidance', 10),

    ('healing', 'healing', 1),
    ('healing', 'complete-cure', 2),
    ('healing', 'created-evil', 3),
    ('healing', 'both-worlds', 4),
    ('healing', 'patience', 5),
    ('healing', 'yunus', 6),
    ('healing', 'protection-name', 7),
    ('healing', 'mercy-guidance', 8),
    ('healing', 'straight-path', 9),
    ('healing', 'repentance', 10),

    ('prayer', 'after-prayer', 1),
    ('prayer', 'between-sajdah', 2),
    ('prayer', 'straight-path', 3),
    ('prayer', 'both-worlds', 4),
    ('prayer', 'knowledge', 5),
    ('prayer', 'repentance', 6),
    ('prayer', 'patience', 7),
    ('prayer', 'no-deviation', 8),
    ('prayer', 'parents-forgiveness', 9),
    ('prayer', 'mercy-guidance', 10),

    ('sleep', 'before-sleep', 1),
    ('sleep', 'after-waking', 2),
    ('sleep', 'protection-name', 3),
    ('sleep', 'created-evil', 4),
    ('sleep', 'sayyidul-istighfar', 5),
    ('sleep', 'both-worlds', 6),
    ('sleep', 'repentance', 7),
    ('sleep', 'no-deviation', 8),
    ('sleep', 'patience', 9),
    ('sleep', 'yunus', 10),

    ('knowledge-guidance', 'knowledge', 1),
    ('knowledge-guidance', 'straight-path', 2),
    ('knowledge-guidance', 'mercy-guidance', 3),
    ('knowledge-guidance', 'no-deviation', 4),
    ('knowledge-guidance', 'both-worlds', 5),
    ('knowledge-guidance', 'house-blessing', 6),
    ('knowledge-guidance', 'patience', 7),
    ('knowledge-guidance', 'repentance', 8),
    ('knowledge-guidance', 'parents-forgiveness', 9),
    ('knowledge-guidance', 'family-comfort', 10),

    ('hardship', 'patience', 1),
    ('hardship', 'yunus', 2),
    ('hardship', 'adam-forgiveness', 3),
    ('hardship', 'mercy-guidance', 4),
    ('hardship', 'both-worlds', 5),
    ('hardship', 'no-deviation', 6),
    ('hardship', 'created-evil', 7),
    ('hardship', 'healing', 8),
    ('hardship', 'complete-cure', 9),
    ('hardship', 'straight-path', 10)
)
insert into public.duas (
  id,
  category_id,
  title,
  reference,
  arabic,
  transliteration,
  bangla,
  info,
  sort_order,
  is_active
)
select
  assignment_seed.category_id || '__' || assignment_seed.dua_key as id,
  assignment_seed.category_id,
  dua_bank.title,
  dua_bank.reference,
  dua_bank.arabic,
  dua_bank.transliteration,
  dua_bank.bangla,
  dua_bank.info,
  assignment_seed.sort_order,
  true
from assignment_seed
join dua_bank on dua_bank.dua_key = assignment_seed.dua_key
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
  is_active = true,
  updated_at = now();
