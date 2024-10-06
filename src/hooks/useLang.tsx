// src/hooks/useLang.tsx
import { useState, useEffect } from 'react';

export enum Langs {
    ES = 'es',
    EN = 'en'
}

export const useLang = () => {
    const [lang, setLang] = useState<Langs>(() => {
        const savedLang = localStorage.getItem('lang');
        return (savedLang as Langs) || Langs.ES;
    });

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    const changeLang = (newLang: Langs) => {
        setLang(newLang);
    };

    return { lang, changeLang };
};