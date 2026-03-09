'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, rtlLanguages, type Language } from '../translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (stored && translations[stored]) {
            setLanguageState(stored);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        document.documentElement.lang = language;
        document.documentElement.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
    }, [language, mounted]);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    }, []);

    const t = useCallback((key: string): string => {
        return translations[language]?.[key] || translations['en']?.[key] || key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
