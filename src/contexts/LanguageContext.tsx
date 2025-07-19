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
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about the mod',
    'faq.search': 'Search FAQs...',
    'faq.noResults': 'No FAQs found matching your search.',
    
    // FAQ Content
    'faq.q1': 'Where is the setting of the mod?',
    'faq.a1': 'The mod is set in 1987 in the city of Los Santos, a place on the brink of chaos where gangs, including the Grove Street Families, battle for control.',
    'faq.q2': 'Who is the main protagonist of the story?',
    'faq.a2': 'The protagonist is Lance "Ryder" Wilson, a loyal member of the Grove Street Families who returns to Los Santos from Vice City to help the gang during CJ\'s absence.',
    'faq.q3': 'Why did CJ leave Los Santos?',
    'faq.a3': 'CJ, or Carl Johnson, left Los Santos after the tragic death of his brother, Brian. He went to Liberty City to cope with the loss, leaving Sweet and the others behind to handle the gang.',
    'faq.q4': 'Who are the main antagonists in the game?',
    'faq.a4': 'The primary antagonist is Victor "Viper" Mendez, a dangerous drug kingpin aiming to expand his empire in Los Santos, seeing the Grove Street Families as a major obstacle.',
    'faq.q5': 'Are there multiple chapters in the storyline?',
    'faq.a5': 'Yes, the mod is divided into three chapters, each featuring intense gang warfare and missions that push Ryder and the Grove Street Families to their limits.',
    'faq.q6': 'Is there any word on additional content or expansions?',
    'faq.a6': 'Yes, once the mod is finished, there are plans for downloadable content (DLC) to further enrich the storyline and features.',
    'faq.q7': 'How do I stay updated about the progress?',
    'faq.a7': 'You can find updates on the official Discord server or by following the YouTube channel "cerdopalo."',
    'faq.q8': 'Will this mod significantly change GTA San Andreas?',
    'faq.a8': 'Yes, the mod will overhaul many aspects of the game, including missions, characters, gameplay mechanics, and graphics, offering a fresh experience set in 1987 Los Santos.',
    'faq.q9': 'What gangs are involved in the storyline?',
    'faq.a9': 'The game features several gangs, such as the Grove Street Families, Ballas, La Sombra del Cuervo, Vagos, Seville Boulevard Families, Temple Drive Families, Aztecas, Russian Mafia, and Sindaccos.',
    'faq.q10': 'Who are the Grove Street Families\' allies?',
    'faq.a10': 'The Grove Street Families are allied with the Seville Boulevard Families, Temple Drive Families, and Tommy Vercetti.',
    'faq.q11': 'What is Ryder\'s history in Vice City?',
    'faq.a11': 'Ryder worked for Tommy Vercetti in Vice City before returning to Los Santos to reconnect with the Grove Street Families and continue his role in the gang.',
    'faq.q12': 'Are there any side missions in the mod?',
    'faq.a12': 'Yes, the mod includes side missions like Pizza Delivery, Trash Dash, and Drug Bust Operation, with vehicles available at various locations around the map, including Idlewood and Willowfield.',
    
    // Requirements Section
    'req.title': 'System Requirements',
    'req.subtitle': 'Ensure optimal performance and stability',
    'req.minimum': 'Minimum Requirements',
    'req.additional': 'Additional Tools Required',
    'req.description': 'Download these essential tools to ensure compatibility and prevent crashes:',
    'req.note': 'Note: The mod is only compatible with Windows-based systems. MacOS and other operating systems are not supported.',
    'req.cleanInstall': 'Clean Installation Recommended',
    'req.gameVersion': 'Game Version',
    'req.dyom': 'DYOM',
    'req.os': 'Operating System',
    'req.ram': 'RAM',
    'req.graphics': 'Graphics',
    'req.storage': 'Storage',
    'req.cleo5': 'CLEO 5',
    'req.cleo5Desc': 'Essential scripting library',
    'req.dyomDesc': 'Mission creation tool',
    'req.cleoPlus': 'CLEO+',
    'req.cleoPlusDesc': 'Enhanced CLEO features',
    'req.essentials': 'Essentials Pack',
    'req.essentialsDesc': 'All-in-one requirement pack',
    
    // Download Section
    'dl.title': 'Download Section',
    'dl.subtitle': 'Get everything you need to start your Los Santos journey',
    'dl.modpack': 'Modpack',
    'dl.modpackDesc': 'Includes all essential files for the mod. Updated assets, models, and configurations required to play the latest version.',
    'dl.storyline': 'Storyline',
    'dl.storylineDesc': 'The full narrative experience of Chapter 2, including updated missions, new cutscenes, and dialogues. Chapter 1 is also included. Requires DYOM 8.1 Stable.',
    'dl.patch': 'Latest Patch',
    'dl.patchDesc': 'Optional fixes and tweaks. Patch updates will be released separately to improve stability and performance.',
    'dl.updated': 'UPDATED',
    'dl.required': 'Required',
    'dl.comingSoon': 'Coming Soon...',
    'dl.installTitle': 'Installation Instructions',
    'dl.step1': 'Download and install all required tools from the Requirements section',
    'dl.step2': 'Download the Modpack and extract it to your GTA San Andreas directory',
    'dl.step3': 'Download the Storyline and place DYOM files in the DYOM folder',
    'dl.step4': 'Launch the game and enjoy your Los Santos adventure!',
    
    // Trailer Section
    'trailer.title': 'Official Trailer',
    'trailer.subtitle': 'Get a taste of the action and atmosphere',
    'trailer.chapterTitle': 'Chapter 2 Trailer - Updated',
    'trailer.description': 'Watch Ryder navigate the dangerous streets of 1987 Los Santos, facing new enemies and old allies in this action-packed preview of the latest chapter.',
    
    // Gallery Section
    'gallery.title': 'Game Gallery',
    'gallery.disclaimer': 'Disclaimer: This mod is not affiliated with Rockstar Games in any way. It\'s a fan-made project created purely for entertainment purposes, with no monetization involved.',
    
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
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre el mod',
    'faq.search': 'Buscar preguntas...',
    'faq.noResults': 'No se encontraron preguntas que coincidan con tu búsqueda.',
    
    // FAQ Content
    'faq.q1': '¿Dónde está ambientado el mod?',
    'faq.a1': 'El mod está ambientado en 1987 en la ciudad de Los Santos, un lugar al borde del caos donde las pandillas, incluidas las Grove Street Families, luchan por el control.',
    'faq.q2': '¿Quién es el protagonista principal de la historia?',
    'faq.a2': 'El protagonista es Lance "Ryder" Wilson, un miembro leal de las Grove Street Families que regresa a Los Santos desde Vice City para ayudar a la pandilla durante la ausencia de CJ.',
    'faq.q3': '¿Por qué CJ dejó Los Santos?',
    'faq.a3': 'CJ, o Carl Johnson, dejó Los Santos después de la trágica muerte de su hermano, Brian. Se fue a Liberty City para lidiar con la pérdida, dejando a Sweet y a los demás para manejar la pandilla.',
    'faq.q4': '¿Quiénes son los principales antagonistas del juego?',
    'faq.a4': 'El antagonista principal es Victor "Viper" Mendez, un peligroso capo de la droga que busca expandir su imperio en Los Santos, viendo a las Grove Street Families como un obstáculo importante.',
    'faq.q5': '¿Hay múltiples capítulos en la historia?',
    'faq.a5': 'Sí, el mod está dividido en tres capítulos, cada uno con intensas guerras de pandillas y misiones que llevan a Ryder y las Grove Street Families al límite.',
    'faq.q6': '¿Hay noticias sobre contenido adicional o expansiones?',
    'faq.a6': 'Sí, una vez que se termine el mod, hay planes para contenido descargable (DLC) para enriquecer aún más la historia y las características.',
    'faq.q7': '¿Cómo me mantengo actualizado sobre el progreso?',
    'faq.a7': 'Puedes encontrar actualizaciones en el servidor oficial de Discord o siguiendo el canal de YouTube "cerdopalo".',
    'faq.q8': '¿Este mod cambiará significativamente GTA San Andreas?',
    'faq.a8': 'Sí, el mod renovará muchos aspectos del juego, incluyendo misiones, personajes, mecánicas de juego y gráficos, ofreciendo una experiencia fresca ambientada en Los Santos de 1987.',
    'faq.q9': '¿Qué pandillas están involucradas en la historia?',
    'faq.a9': 'El juego presenta varias pandillas, como las Grove Street Families, Ballas, La Sombra del Cuervo, Vagos, Seville Boulevard Families, Temple Drive Families, Aztecas, Mafia Rusa y Sindaccos.',
    'faq.q10': '¿Quiénes son los aliados de las Grove Street Families?',
    'faq.a10': 'Las Grove Street Families están aliadas con las Seville Boulevard Families, Temple Drive Families y Tommy Vercetti.',
    'faq.q11': '¿Cuál es la historia de Ryder en Vice City?',
    'faq.a11': 'Ryder trabajó para Tommy Vercetti en Vice City antes de regresar a Los Santos para reconectarse con las Grove Street Families y continuar su papel en la pandilla.',
    'faq.q12': '¿Hay misiones secundarias en el mod?',
    'faq.a12': 'Sí, el mod incluye misiones secundarias como Entrega de Pizza, Trash Dash y Operación Anti-Drogas, con vehículos disponibles en varios lugares del mapa, incluyendo Idlewood y Willowfield.',
    
    // Requirements Section
    'req.title': 'Requisitos del Sistema',
    'req.subtitle': 'Asegura un rendimiento y estabilidad óptimos',
    'req.minimum': 'Requisitos Mínimos',
    'req.additional': 'Herramientas Adicionales Requeridas',
    'req.description': 'Descarga estas herramientas esenciales para asegurar compatibilidad y prevenir fallos:',
    'req.note': 'Nota: El mod solo es compatible con sistemas basados en Windows. MacOS y otros sistemas operativos no son compatibles.',
    'req.cleanInstall': 'Instalación Limpia Recomendada',
    'req.gameVersion': 'Versión del Juego',
    'req.dyom': 'DYOM',
    'req.os': 'Sistema Operativo',
    'req.ram': 'RAM',
    'req.graphics': 'Gráficos',
    'req.storage': 'Almacenamiento',
    'req.cleo5': 'CLEO 5',
    'req.cleo5Desc': 'Librería de scripts esencial',
    'req.dyomDesc': 'Herramienta de creación de misiones',
    'req.cleoPlus': 'CLEO+',
    'req.cleoPlusDesc': 'Características mejoradas de CLEO',
    'req.essentials': 'Paquete Esencial',
    'req.essentialsDesc': 'Paquete todo-en-uno de requisitos',
    
    // Download Section
    'dl.title': 'Sección de Descarga',
    'dl.subtitle': 'Obtén todo lo que necesitas para comenzar tu viaje en Los Santos',
    'dl.modpack': 'Paquete de Mods',
    'dl.modpackDesc': 'Incluye todos los archivos esenciales para el mod. Recursos actualizados, modelos y configuraciones requeridas para jugar la última versión.',
    'dl.storyline': 'Historia',
    'dl.storylineDesc': 'La experiencia narrativa completa del Capítulo 2, incluyendo misiones actualizadas, nuevas cinemáticas y diálogos. El Capítulo 1 también está incluido. Requiere DYOM 8.1 Estable.',
    'dl.patch': 'Parche Más Reciente',
    'dl.patchDesc': 'Correcciones y ajustes opcionales. Las actualizaciones de parches se lanzarán por separado para mejorar la estabilidad y el rendimiento.',
    'dl.updated': 'ACTUALIZADO',
    'dl.required': 'Requerido',
    'dl.comingSoon': 'Próximamente...',
    'dl.installTitle': 'Instrucciones de Instalación',
    'dl.step1': 'Descarga e instala todas las herramientas requeridas de la sección de Requisitos',
    'dl.step2': 'Descarga el Paquete de Mods y extráelo en tu directorio de GTA San Andreas',
    'dl.step3': 'Descarga la Historia y coloca los archivos DYOM en la carpeta DYOM',
    'dl.step4': '¡Inicia el juego y disfruta tu aventura en Los Santos!',
    
    // Trailer Section
    'trailer.title': 'Tráiler Oficial',
    'trailer.subtitle': 'Obtén una muestra de la acción y la atmósfera',
    'trailer.chapterTitle': 'Tráiler del Capítulo 2 - Actualizado',
    'trailer.description': 'Mira a Ryder navegar las peligrosas calles de Los Santos de 1987, enfrentando nuevos enemigos y viejos aliados en esta vista previa llena de acción del último capítulo.',
    
    // Gallery Section
    'gallery.title': 'Galería del Juego',
    'gallery.disclaimer': 'Descargo de responsabilidad: Este mod no está afiliado con Rockstar Games de ninguna manera. Es un proyecto hecho por fanáticos creado puramente con fines de entretenimiento, sin monetización involucrada.',
    
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