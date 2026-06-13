# Neki

Neki is an Islamic learning and habit app built with Expo React Native. It combines Quran reading, Hadith and Dua, beginner Arabic learning, Salah guidance, profile progress, points, streaks, and a modern mobile-first dashboard.

## UI Preview

The UI images should be kept in `docs/ui`. GitHub can only display them after the actual image files are added to the repository.

| UI | File |
| --- | --- |
| Home | `docs/ui/home.png` |
| Learn | `docs/ui/learn.png` |
| Arabic Alphabet | `docs/ui/alphabet.png` |
| Quran | `docs/ui/quran.png` |
| Hadith Books | `docs/ui/hadith-books.png` |
| Dua Categories | `docs/ui/dua-categories.png` |
| Dua Collection | `docs/ui/dua-collection.png` |
| Salah Guide | `docs/ui/salah-guide.png` |
| Profile | `docs/ui/profile.png` |

## Features

- Supabase authentication for login and signup.
- User profile screen with points, streak, level, weekly details, and sign out.
- Responsive home dashboard with daily progress, prayer timing carousel, feature shortcuts, and bottom navigation.
- Quran reading feature with Surah-based Quran and Hafezi Para modes.
- Hadith and Dua feature with Hadith book list, Dua categories, references, Arabic text, Bangla pronunciation, and Bangla meaning.
- Supabase-backed Dua database, including seed SQL for categories and duas.
- Learn feature with Arabic alphabet and Salah visual guide.
- Arabic alphabet module with 29 letters, including Hamza after Waw, Bangla pronunciation, example words, and speech playback.
- Salah guide with step-by-step visual postures, recitation text, Bangla meaning, and previous/next controls.

## Tech Stack

- Expo SDK 54
- React Native 0.81
- React 19
- Supabase Auth and Database
- React Navigation
- Expo Speech
- Expo Image
- AsyncStorage

## Requirements

- Node.js LTS is recommended. Use Node 20 or Node 22 for the smoothest Expo experience.
- npm
- Expo Go with SDK 54 support, or Android Studio for an Android emulator.
- A Supabase project.

If PowerShell blocks `npm`, use the `.cmd` executables:

```powershell
npm.cmd -v
npx.cmd expo start
```

## Installation

```powershell
git clone <your-repository-url>
cd Neki
npm install
```

Create a `.env` file from `.env.example`:

```powershell
copy .env.example .env
```

Add your Supabase values:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not commit `.env`. It is already ignored by Git.

## Supabase Setup

Open your Supabase project, then go to **SQL Editor** and run:

1. `supabase/schema.sql`
2. `supabase/dua_full_seed.sql`

The schema creates:

- `profiles`
- `dua_categories`
- `duas`
- Row Level Security policies
- A signup trigger that creates profile rows for new auth users

The full seed inserts Dua categories and Dua content used by the app.

## Run The App

Start the Expo development server:

```powershell
npx expo start -c
```

Run on a phone:

- Install Expo Go from the Play Store or App Store.
- Keep your phone and computer on the same Wi-Fi.
- Scan the QR code shown in the terminal.

Run on web:

```powershell
npx expo start --web -c
```

Run on Android emulator:

```powershell
npx expo start --android
```

## Project Structure

```text
.
|-- App.js
|-- app.json
|-- assets/
|-- components/
|-- data/
|   |-- arabicAlphabet.js
|   `-- quranData.js
|-- lib/
|   |-- duaRepository.js
|   |-- quranApi.js
|   `-- supabase.js
|-- screens/
|   |-- Home.js
|   |-- LogIn.js
|   |-- SignUp.js
|   |-- Profile.js
|   |-- TheQuran.js
|   |-- QuranRecitation.js
|   |-- DuaHadith.js
|   |-- DuaRecitation.js
|   `-- Education.js
`-- supabase/
    |-- schema.sql
    |-- dua_seed_example.sql
    `-- dua_full_seed.sql
```

## Important Notes

- Keep Supabase keys in `.env` locally.
- For deployment, add the same environment variables in your hosting or build environment:
  - `EXPO_PUBLIC_SUPABASE_URL`
  - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- The Supabase anon key is public by design, but Row Level Security must stay enabled.
- For a production mobile release, use EAS Build.

## Useful Commands

```powershell
npm install
npm start
npm run android
npm run ios
npm run web
npx expo-doctor
```

## Roadmap

- Add full course-style Learn modules for Makhraj, Quran Reading, Tajweed, Wudu, Short Surah, and Daily Sunnah.
- Add lesson completion, XP, streak sync, and quiz results to Supabase.
- Add real prayer time calculation by location.
- Add offline caching for Quran, Dua, and Hadith content.

## License

Add a `LICENSE` file before publishing the repository publicly.
