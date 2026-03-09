import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';
import zh from './zh.json';
import ja from './ja.json';

export type Language = 'en' | 'fr' | 'ar' | 'zh' | 'ja';

export const translations: Record<Language, Record<string, string>> = {
    en,
    fr,
    ar,
    zh,
    ja,
};

export const rtlLanguages: Language[] = ['ar'];

export const languageNames: Record<Language, string> = {
    en: 'English',
    fr: 'Français',
    ar: 'العربية',
    zh: '中文',
    ja: '日本語',
};
