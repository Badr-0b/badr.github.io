'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { languageNames, type Language } from '../translations';
import './LanguageSelector.css';

const languages = Object.keys(languageNames) as Language[];

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="lang-selector" ref={ref}>
            <button
                className="lang-selector-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select language"
            >
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                {languageNames[language]}
            </button>
            <div className={`lang-dropdown ${isOpen ? 'open' : ''}`}>
                {languages.map((lang) => (
                    <button
                        key={lang}
                        className={`lang-option ${lang === language ? 'active' : ''}`}
                        onClick={() => {
                            setLanguage(lang);
                            setIsOpen(false);
                        }}
                    >
                        {languageNames[lang]}
                    </button>
                ))}
            </div>
        </div>
    );
}
