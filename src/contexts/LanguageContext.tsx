import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.info': 'Info',
    'nav.faq': 'FAQ',
    'nav.requirements': 'Requirements',
    'nav.download': 'Download',
    'nav.trailer': 'Trailer',
    'nav.gallery': 'Gallery',
    'nav.credits': 'Credits',
    'nav.manual': 'Manual',
    
    // Hero
    'hero.title': 'GTA San Andreas Stories',
    'hero.subtitle': 'Experience the streets of San Andreas like never before',
    'hero.description': 'Immerse yourself in a completely redesigned Grand Theft Auto experience with enhanced missions, improved graphics, and an engaging storyline that will keep you on the edge of your seat.',
    'hero.playNow': 'Play Now',
    'hero.watchTrailer': 'Watch Trailer',
    
    // Info Section
    'info.title': 'About GTA SAS',
    'info.description': 'GTA San Andreas Stories is a comprehensive modification that transforms your gaming experience with new missions, enhanced graphics, and immersive storytelling.',
    'info.feature1.title': 'Enhanced Missions',
    'info.feature1.desc': 'Experience completely redesigned missions with improved objectives and storytelling.',
    'info.feature2.title': 'AI Voices',
    'info.feature2.desc': 'Professional AI-generated voices bring characters to life with realistic dialogue.',
    'info.feature3.title': 'Improved Graphics',
    'info.feature3.desc': 'Enhanced textures and visual effects for a modern gaming experience.',
    'info.joinDiscord': 'Join Discord Community',
    
    // General
    'loading': 'Loading...',
    'download': 'Download',
    'learnMore': 'Learn More',
  },
  es: {
    // Navigation
    'nav.info': 'Información',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.requirements': 'Requisitos',
    'nav.download': 'Descargar',
    'nav.trailer': 'Tráiler',
    'nav.gallery': 'Galería',
    'nav.credits': 'Créditos',
    'nav.manual': 'Manual',
    
    // Hero
    'hero.title': 'GTA San Andreas Stories',
    'hero.subtitle': 'Experimenta las calles de San Andreas como nunca antes',
    'hero.description': 'Sumérgete en una experiencia de Grand Theft Auto completamente rediseñada con misiones mejoradas, gráficos mejorados y una historia envolvente que te mantendrá al borde de tu asiento.',
    'hero.playNow': 'Jugar Ahora',
    'hero.watchTrailer': 'Ver Tráiler',
    
    // Info Section
    'info.title': 'Acerca de GTA SAS',
    'info.description': 'GTA San Andreas Stories es una modificación integral que transforma tu experiencia de juego con nuevas misiones, gráficos mejorados y narrativa inmersiva.',
    'info.feature1.title': 'Misiones Mejoradas',
    'info.feature1.desc': 'Experimenta misiones completamente rediseñadas con objetivos mejorados y narrativa.',
    'info.feature2.title': 'Voces IA',
    'info.feature2.desc': 'Voces profesionales generadas por IA dan vida a los personajes con diálogos realistas.',
    'info.feature3.title': 'Gráficos Mejorados',
    'info.feature3.desc': 'Texturas mejoradas y efectos visuales para una experiencia de juego moderna.',
    'info.joinDiscord': 'Únete a la Comunidad Discord',
    
    // General
    'loading': 'Cargando...',
    'download': 'Descargar',
    'learnMore': 'Saber Más',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};