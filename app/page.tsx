'use client';

import React from 'react';
import { useLanguage } from './components/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="content">
            <div className="background-container"></div>
            <div className="overlay"></div>

            <h1>{t('hero.title')} <br /><span>{t('hero.subtitle')}</span></h1>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>

            <p>{t('hero.description')}</p>

            <div className="note-card">
                <p className="license-note">{t('hero.license')}</p>
            </div>
        </main>
    );
}
