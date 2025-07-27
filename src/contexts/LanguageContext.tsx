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
    // Additional hero keys
    'hero.tagline': 'The Return of Ryder (1987)',
    'hero.intro': 'Experience a whole new gangsta storyline in Los Santos, 1987. Ryder returns from Vice City to help the Grove Street Families during CJ\'s absence. New gangs. New missions. Same chaos.',

    // General buttons/labels
    'download.now': 'Download Now',
    'watch.trailer': 'Watch Trailer',
    'join.discord': 'Join Discord Community',

    // Mod Overview
    'mod.overview.title': 'Mod Overview',
    'mod.overview.subtitle': 'Dive deep into the streets of 1987 Los Santos',

    // About Mod
    'about.mod.title': 'About the Mod',
    'about.mod.description': 'GTA San Andreas Stories, also known as GTA San Andreas Stories: The Return of Ryder or GTA San Andreas Stories: 1987, is a fan-made prequel to the classic Grand Theft Auto: San Andreas.',
    'about.mod.technical': 'This mod utilizes DYOM 8.1 and focuses on Ryder\'s return to Los Santos in 1987, embarking on new adventures while reconnecting with familiar faces from the past.',

    // Key Features
    'key.features.title': 'Key Features',
    'key.features.1': 'Set in 1987 Los Santos during CJ\'s absence',
    'key.features.2': 'Play as Lance "Ryder" Wilson returning from Vice City',
    'key.features.3': 'Three intense chapters of gang warfare',
    'key.features.4': 'New missions and side activities',
    'key.features.5': 'Enhanced graphics and retextures',
    'key.features.6': 'Multiple gang factions and alliances',

    // Compatibility
    'compatibility.title': 'Important Compatibility Notes:',
    'compatibility.1': '• Widescreen mods may cause crashes - having multiple widescreen mods at once can create conflicts',
    'compatibility.2': '• SAMP (San Andreas Multiplayer) is incompatible',
    'compatibility.3': '• Animation/Ragdoll mods are not supported',
    'compatibility.4': '• Highly suggested: Avoid adding multiple modpacks as this may cause compatibility issues, crashes or other problems',
    'compatibility.5': '• Recommended: Clean GTA San Andreas v1.0 installation',

    // Trailer Section
    'trailer.title': 'Official Trailer',
    'trailer.subtitle': 'Get a taste of the action and atmosphere',
    'trailer.chapterTitle': 'Chapter 2 Trailer - Updated',
    'trailer.description': 'Watch Ryder navigate the dangerous streets of 1987 Los Santos, facing new enemies and old allies in this action-packed preview of the latest chapter.',
    'trailer.extra.videos': 'If you want to dive deeper, watch these extra videos:',
    'trailer.mod.overview': 'Mod Overview – A complete breakdown of the mod\'s content and structure.',
    'trailer.introduction': 'The Introduction – A brief introduction explaining the story background.',

    // Gallery Section
    'gallery.title': 'Game Gallery',
    'gallery.disclaimer': 'Disclaimer: This mod is not affiliated with Rockstar Games in any way. It\'s a fan-made project created purely for entertainment purposes, with no monetization involved.',
    'gallery.caption.1': 'Scene at Grove Street',
    'gallery.caption.2': 'Vice City Vibes',
    'gallery.caption.3': 'Los Santos Skyline',
    'gallery.caption.4': 'Gang Territory',
    'gallery.caption.5': 'Weapon Selection',
    'gallery.caption.6': 'Safehouse Interior',
    'gallery.caption.7': 'Vintage Billboard',
    'gallery.caption.8': 'Character Lineup',
    'gallery.caption.9': 'Mission Briefing',
    'gallery.caption.10': 'Car Chase',
    'gallery.caption.11': 'Custom Vehicle',
    'gallery.caption.12': 'UI Preview',
    'gallery.caption.13': 'Enhanced Gameplay',
    'gallery.caption.14': 'Mission Cinematic Scene',
    'gallery.navigation': 'Previous slideNext slide',

    // Credits Section
    'credits.title': 'Development Team',
    'credits.subtitle': 'The talented creators behind GTA San Andreas Stories',
    'credits.coreTeam': 'Core Development Team',
    'credits.contributors': 'Special Contributors',
    'credits.thanks': 'Special Thanks',
    'credits.thanksDesc': 'This mod integrates work from talented creators including:',
    'credits.fullCredits': 'Full credits available in modpack files and many others who contributed to this project.',

    // Footer
    'footer.description': 'A fan-made mod bringing you back to 1987 Los Santos with Ryder\'s return. Experience new missions, enhanced graphics, and immersive gang warfare.',
    'footer.quickLinks': 'Quick Links',
    'footer.discordCommunity': 'Discord Community',
    'footer.userManual': 'User Manual',
    'footer.downloads': 'Downloads',
    'footer.legal': 'Legal',
    'footer.disclaimer': 'This mod is not affiliated with Rockstar Games. GTA San Andreas Stories is a fan-made project created for entertainment purposes only. No monetization is involved.',

    // General
    'loading': 'Loading...',
    'download': 'Download',
    'learnMore': 'Learn More',
    'get': 'Get',
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
    'hero.tagline': 'El Regreso de Ryder (1987)',
    'hero.intro': 'Experimenta una nueva historia gángster en Los Santos, 1987. Ryder regresa de Vice City para ayudar a las Grove Street Families durante la ausencia de CJ. Nuevas pandillas. Nuevas misiones. El mismo caos.',

    // General buttons/labels
    'download.now': 'Descargar Ahora',
    'watch.trailer': 'Ver Tráiler',
    'join.discord': 'Unirse a la Comunidad Discord',

    // Mod Overview
    'mod.overview.title': 'Resumen del Mod',
    'mod.overview.subtitle': 'Sumérgete en las calles de Los Santos de 1987',

    // About Mod
    'about.mod.title': 'Acerca del Mod',
    'about.mod.description': 'GTA San Andreas Stories, también conocido como GTA San Andreas Stories: El Regreso de Ryder o GTA San Andreas Stories: 1987, es una precuela creada por fans del clásico Grand Theft Auto: San Andreas.',
    'about.mod.technical': 'Este mod utiliza DYOM 8.1 y se centra en el regreso de Ryder a Los Santos en 1987, embarcándose en nuevas aventuras mientras se reencuentra con caras familiares del pasado.',

    // Key Features
    'key.features.title': 'Características Principales',
    'key.features.1': 'Ambientado en Los Santos de 1987 durante la ausencia de CJ',
    'key.features.2': 'Juega como Lance "Ryder" Wilson regresando de Vice City',
    'key.features.3': 'Tres intensos capítulos de guerra entre pandillas',
    'key.features.4': 'Nuevas misiones y actividades secundarias',
    'key.features.5': 'Gráficos mejorados y retoques',
    'key.features.6': 'Múltiples facciones y alianzas de pandillas',

    // Compatibility
    'compatibility.title': 'Notas Importantes de Compatibilidad:',
    'compatibility.1': '• Los mods de pantalla ancha pueden causar fallos - tener múltiples mods de pantalla ancha a la vez puede crear conflictos',
    'compatibility.2': '• SAMP (San Andreas Multiplayer) es incompatible',
    'compatibility.3': '• Los mods de animación/Ragdoll no son compatibles',
    'compatibility.4': '• Altamente recomendado: Evita añadir múltiples paquetes de mods ya que esto puede causar problemas de compatibilidad, fallos u otros problemas',
    'compatibility.5': '• Recomendado: Instalación limpia de GTA San Andreas v1.0',

    // Trailer Section
    'trailer.title': 'Tráiler Oficial',
    'trailer.subtitle': 'Obtén una muestra de la acción y la atmósfera',
    'trailer.chapterTitle': 'Tráiler del Capítulo 2 - Actualizado',
    'trailer.description': 'Mira a Ryder navegar las peligrosas calles de Los Santos de 1987, enfrentando nuevos enemigos y viejos aliados en esta vista previa llena de acción del último capítulo.',
    'trailer.extra.videos': 'Si deseas profundizar más, mira estos videos adicionales:',
    'trailer.mod.overview': 'Resumen del Mod – Un desglose completo del contenido y estructura del mod.',
    'trailer.introduction': 'La Introducción – Una breve introducción que explica el trasfondo de la historia.',

    // Gallery Section
    'gallery.title': 'Galería del Juego',
    'gallery.disclaimer': 'Descargo de responsabilidad: Este mod no está afiliado con Rockstar Games de ninguna manera. Es un proyecto hecho por fanáticos creado puramente con fines de entretenimiento, sin monetización involucrada.',
    'gallery.caption.1': 'Escena en Grove Street',
    'gallery.caption.2': 'Vibraciones de Vice City',
    'gallery.caption.3': 'Horizonte de Los Santos',
    'gallery.caption.4': 'Territorio de Pandillas',
    'gallery.caption.5': 'Selección de Armas',
    'gallery.caption.6': 'Interior de Casa Segura',
    'gallery.caption.7': 'Cartelera Vintage',
    'gallery.caption.8': 'Alineación de Personajes',
    'gallery.caption.9': 'Briefing de Misión',
    'gallery.caption.10': 'Persecución en Auto',
    'gallery.caption.11': 'Vehículo Personalizado',
    'gallery.caption.12': 'Vista Previa de la Interfaz',
    'gallery.caption.13': 'Jugabilidad Mejorada',
    'gallery.caption.14': 'Escena Cinemática de Misión',
    'gallery.navigation': 'Diapositiva anteriorSiguiente diapositiva',

    // Credits Section
    'credits.title': 'Equipo de Desarrollo',
    'credits.subtitle': 'Los talentosos creadores detrás de GTA San Andreas Stories',
    'credits.coreTeam': 'Equipo de Desarrollo Principal',
    'credits.contributors': 'Contribuidores Especiales',
    'credits.thanks': 'Agradecimientos Especiales',
    'credits.thanksDesc': 'Este mod integra trabajo de creadores talentosos incluyendo:',
    'credits.fullCredits': 'Créditos completos disponibles en los archivos del paquete de mods y muchos otros que contribuyeron a este proyecto.',

    // Footer
    'footer.description': 'Un mod hecho por fanáticos que te lleva de vuelta a Los Santos de 1987 con el regreso de Ryder. Experimenta nuevas misiones, gráficos mejorados y guerra de pandillas inmersiva.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.discordCommunity': 'Comunidad Discord',
    'footer.userManual': 'Manual de Usuario',
    'footer.downloads': 'Descargas',
    'footer.legal': 'Legal',
    'footer.disclaimer': 'Este mod no está afiliado con Rockstar Games. GTA San Andreas Stories es un proyecto hecho por fanáticos creado solo con fines de entretenimiento. No hay monetización involucrada.',

    // General
    'loading': 'Cargando...',
    'download': 'Descargar',
    'learnMore': 'Saber Más',
    'get': 'Obtener',
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
