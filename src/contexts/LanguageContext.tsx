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
    'nav.title': 'GTA SAS',
    'nav.info': 'Info',
    'nav.trailer': 'Trailer',
    'nav.gallery': 'Gallery',
    'nav.faq': 'FAQ',
    'nav.requirements': 'Requirements',
    'nav.download': 'Download',
    'nav.credits': 'Credits',
    'nav.manual': 'Manual',
    'nav.language': 'ES',

    // Hero Section
    'hero.title': 'GTA San Andreas Stories',
    'hero.tagline': 'The Return of Ryder (1987)',
    'hero.description': 'Experience a whole new gangsta storyline in Los Santos, 1987. Ryder returns from Vice City to help the Grove Street Families during CJ\'s absence. New gangs. New missions. Same chaos.',
    'hero.download': 'Download Now',
    'hero.watchTrailer': 'Watch Trailer',

    // Mod Overview
    'mod.overview': 'Mod Overview',
    'mod.overview.subtitle': 'Dive deep into the streets of 1987 Los Santos',

    // About Mod
    'about.title': 'About the Mod',
    'about.description': 'GTA San Andreas Stories, also known as GTA San Andreas Stories: The Return of Ryder or GTA San Andreas Stories: 1987, is a fan-made prequel to the classic Grand Theft Auto: San Andreas.',
    'about.technical': 'This mod utilizes DYOM 8.1 and focuses on Ryder\'s return to Los Santos in 1987, embarking on new adventures while reconnecting with familiar faces from the past.',
    'about.joinDiscord': 'Join Discord Community',

    // Key Features
    'features.title': 'Key Features',
    'features.1': 'Set in 1987 Los Santos during CJ\'s absence',
    'features.2': 'Play as Lance "Ryder" Wilson returning from Vice City',
    'features.3': 'Three intense chapters of gang warfare',
    'features.4': 'New missions and side activities',
    'features.5': 'Enhanced graphics and retextures',
    'features.6': 'Multiple gang factions and alliances',

    // Compatibility Notes
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
    'trailer.extraVideos': 'If you\'d like to dive deeper, check out these extra videos:',
    'trailer.modOverview': 'Mod Overview – A full breakdown of the mod\'s content and structure.',
    'trailer.introduction': 'The Introduction – A short intro explaining the story background.',

    // Gallery Section
    'gallery.title': 'Game Gallery',
    'gallery.counter': '/ 14',
    'gallery.disclaimer': 'Disclaimer: This mod is not affiliated with Rockstar Games in any way. It\'s a fan-made project created purely for entertainment purposes, with no monetization involved.',
    'gallery.navigation': 'Previous slideNext slide',

    // Development Team
    'team.title': 'Development Team',
    'team.subtitle': 'The talented creators behind GTA San Andreas Stories',
    'team.coreTeam': 'Core Development Team',
    'team.contributors': 'Special Contributors',
    'team.thanks': 'Special Thanks',
    'team.thanksDesc': 'This mod integrates work from talented creators including:',
    'team.fullCredits': 'Full credits available in modpack files and many others who contributed to this project.',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about the mod',
    'faq.search': 'Search FAQs...',
    'faq.noResults': 'No FAQs found matching your search.',

    // FAQ Questions
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
    'faq.q13': 'How do I become a developer/staff?',
    'faq.a13': 'Join the Discord server and open a ticket to apply for staff/developer positions. Share at least one of your works, and the owner/staff will decide if you are in or not.',
    'faq.q14': 'Where do I install the modpack?',
    'faq.a14': 'Install the modpack in your main GTA San Andreas folder. It must be a clean installation without SAMP or any other mods.',
    'faq.q15': 'Where do I install DYOM and the storyline?',
    'faq.a15': 'Install DYOM and the storyline into your GTA San Andreas User Files folder (found in Documents). CLEO 5 is required. Do NOT place the storyline into the main game directory or the modpack into the User Files — this will break the mod.',
    'faq.q16': 'What are the limitations of this mod?',
    'faq.a16': 'This mod does not support multiplayer (like SAMP), heavy CLEO mods, or total conversion packs.',

    // Requirements Section
    'requirements.title': 'System Requirements',
    'requirements.subtitle': 'Ensure optimal performance and stability',
    'requirements.minimum': 'Minimum Requirements',
    'requirements.additional': 'Additional Tools Required',
    'requirements.description': 'Download these essential tools to ensure compatibility and prevent crashes:',
    'requirements.note': 'Note: The mod is only compatible with Windows-based systems. MacOS and other operating systems are not supported.',
    'requirements.cleanInstall': 'Clean Installation Recommended',
    'requirements.gameVersion': 'Game Version',
    'requirements.dyom': 'DYOM',
    'requirements.os': 'Operating System',
    'requirements.ram': 'RAM',
    'requirements.graphics': 'Graphics',
    'requirements.storage': 'Storage',
    'requirements.cleo5': 'CLEO 5',
    'requirements.cleo5Desc': 'Essential scripting library',
    'requirements.dyomDesc': 'Mission creation tool',
    'requirements.cleoPlus': 'CLEO+',
    'requirements.cleoPlusDesc': 'Enhanced CLEO features',
    'requirements.essentials': 'Essentials Pack',
    'requirements.essentialsDesc': 'All-in-one requirement pack',

    // Download Section
    'download.title': 'Download Section',
    'download.subtitle': 'Get everything you need to start your Los Santos journey',
    'download.modpack': 'Modpack',
    'download.modpackDesc': 'Includes all essential files for the mod. Updated assets, models, and configurations required to play the latest version.',
    'download.storyline': 'Storyline',
    'download.storylineDesc': 'The full narrative experience of Chapter 2, including updated missions, new cutscenes, and dialogues. Chapter 1 is also included. Requires DYOM 8.1 Stable.',
    'download.patch': 'Latest Patch',
    'download.patchDesc': 'Optional fixes and tweaks. Patch updates will be released separately to improve stability and performance.',
    'download.updated': 'UPDATED',
    'download.required': 'Required',
    'download.comingSoon': 'Coming Soon...',
    'download.installTitle': 'Installation Instructions',
    'download.step1': 'Download and install all required tools from the Requirements section',
    'download.step2': 'Download the Modpack and extract it to your GTA San Andreas directory',
    'download.step3': 'Download the Storyline and place DYOM files in the DYOM folder',
    'download.step4': 'Launch the game and enjoy your Los Santos adventure!',

    // Footer
    'footer.description': 'A fan-made mod bringing you back to 1987 Los Santos with Ryder\'s return. Experience new missions, enhanced graphics, and immersive gang warfare.',
    'footer.quickLinks': 'Quick Links',
    'footer.discordCommunity': 'Discord Community',
    'footer.userManual': 'User Manual',
    'footer.downloads': 'Downloads',
    'footer.legal': 'Legal',
    'footer.disclaimer': 'This mod is not affiliated with Rockstar Games. GTA San Andreas Stories is a fan-made project created for entertainment purposes only. No monetization is involved.',
    'footer.copyright': '© 2025 GTA San Andreas Stories.',

    // Gallery Images
    'gallery.groveStreet': 'Grove Street Scene',
    'gallery.viceCity': 'Vice City Vibes',
    'gallery.skyline': 'Los Santos Skyline',
    'gallery.territory': 'Gang Territory',
    'gallery.weapons': 'Weapon Selection',
    'gallery.safehouse': 'Safe House Interior',
    'gallery.billboard': 'Vintage Billboard',
    'gallery.characters': 'Character Lineup',
    'gallery.briefing': 'Mission Briefing',
    'gallery.chase': 'Car Chase',
    'gallery.vehicle': 'Custom Vehicle',
    'gallery.ui': 'Script UI Preview',
    'gallery.gameplay': 'Enhanced Gameplay',
    'gallery.cutscene': 'Mission Cutscene'
  },
  es: {
    // Navigation
    'nav.title': 'GTA SAS',
    'nav.info': 'Información',
    'nav.trailer': 'Tráiler',
    'nav.gallery': 'Galería',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.requirements': 'Requisitos',
    'nav.download': 'Descargar',
    'nav.credits': 'Créditos',
    'nav.manual': 'Manual',
    'nav.language': 'EN',

    // Hero Section
    'hero.title': 'GTA San Andreas Stories',
    'hero.tagline': 'El Regreso de Ryder (1987)',
    'hero.description': 'Experimenta una nueva historia gángster en Los Santos, 1987. Ryder regresa de Vice City para ayudar a las Grove Street Families durante la ausencia de CJ. Nuevas pandillas. Nuevas misiones. El mismo caos.',
    'hero.download': 'Descargar Ahora',
    'hero.watchTrailer': 'Ver Tráiler',

    // Mod Overview
    'mod.overview': 'Resumen del Mod',
    'mod.overview.subtitle': 'Sumérgete en las calles de Los Santos de 1987',

    // About Mod
    'about.title': 'Acerca del Mod',
    'about.description': 'GTA San Andreas Stories, también conocido como GTA San Andreas Stories: El Regreso de Ryder o GTA San Andreas Stories: 1987, es una precuela creada por fans del clásico Grand Theft Auto: San Andreas.',
    'about.technical': 'Este mod utiliza DYOM 8.1 y se centra en el regreso de Ryder a Los Santos en 1987, embarcándose en nuevas aventuras mientras se reencuentra con caras familiares del pasado.',
    'about.joinDiscord': 'Únete a la Comunidad Discord',

    // Key Features
    'features.title': 'Características Principales',
    'features.1': 'Ambientado en Los Santos de 1987 durante la ausencia de CJ',
    'features.2': 'Juega como Lance "Ryder" Wilson regresando de Vice City',
    'features.3': 'Tres intensos capítulos de guerra entre pandillas',
    'features.4': 'Nuevas misiones y actividades secundarias',
    'features.5': 'Gráficos mejorados y retoques',
    'features.6': 'Múltiples facciones y alianzas de pandillas',

    // Compatibility Notes
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
    'trailer.extraVideos': 'Si deseas profundizar más, mira estos videos adicionales:',
    'trailer.modOverview': 'Resumen del Mod – Un desglose completo del contenido y estructura del mod.',
    'trailer.introduction': 'La Introducción – Una breve introducción que explica el trasfondo de la historia.',

    // Gallery Section
    'gallery.title': 'Galería del Juego',
    'gallery.counter': '/ 14',
    'gallery.disclaimer': 'Descargo de responsabilidad: Este mod no está afiliado con Rockstar Games de ninguna manera. Es un proyecto hecho por fanáticos creado puramente con fines de entretenimiento, sin monetización involucrada.',
    'gallery.navigation': 'Diapositiva anteriorSiguiente diapositiva',

    // Development Team
    'team.title': 'Equipo de Desarrollo',
    'team.subtitle': 'Los talentosos creadores detrás de GTA San Andreas Stories',
    'team.coreTeam': 'Equipo de Desarrollo Principal',
    'team.contributors': 'Contribuidores Especiales',
    'team.thanks': 'Agradecimientos Especiales',
    'team.thanksDesc': 'Este mod integra trabajo de creadores talentosos incluyendo:',
    'team.fullCredits': 'Créditos completos disponibles en los archivos del paquete de mods y muchos otros que contribuyeron a este proyecto.',

    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre el mod',
    'faq.search': 'Buscar preguntas...',
    'faq.noResults': 'No se encontraron preguntas que coincidan con tu búsqueda.',

    // FAQ Questions
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
    'faq.q13': '¿Cómo puedo convertirme en desarrollador/miembro del equipo?',
    'faq.a13': 'Únete al servidor de Discord y abre un ticket para solicitar un puesto como miembro del equipo/desarrollador. Comparte al menos uno de tus trabajos, y el dueño/equipo decidirá si puedes unirte o no.',
    'faq.q14': '¿Dónde instalo el modpack?',
    'faq.a14': 'Instala el modpack en tu carpeta principal de GTA San Andreas. Debe ser una instalación limpia sin SAMP u otros mods.',
    'faq.q15': '¿Dónde instalo DYOM y la historia?',
    'faq.a15': 'Instala DYOM y la historia en tu carpeta de Archivos de Usuario de GTA San Andreas (se encuentra en Documentos). Se requiere CLEO 5. NO coloques la historia en el directorio principal del juego ni el modpack en Archivos de Usuario, ya que esto romperá el mod.',
    'faq.q16': '¿Cuáles son las limitaciones de este mod?',
    'faq.a16': 'Este mod no soporta multijugador (como SAMP), mods pesados de CLEO o paquetes de conversión total.',

    // Requirements Section
    'requirements.title': 'Requisitos del Sistema',
    'requirements.subtitle': 'Asegura un rendimiento y estabilidad óptimos',
    'requirements.minimum': 'Requisitos Mínimos',
    'requirements.additional': 'Herramientas Adicionales Requeridas',
    'requirements.description': 'Descarga estas herramientas esenciales para asegurar compatibilidad y prevenir fallos:',
    'requirements.note': 'Nota: El mod solo es compatible con sistemas basados en Windows. MacOS y otros sistemas operativos no son compatibles.',
    'requirements.cleanInstall': 'Instalación Limpia Recomendada',
    'requirements.gameVersion': 'Versión del Juego',
    'requirements.dyom': 'DYOM',
    'requirements.os': 'Sistema Operativo',
    'requirements.ram': 'RAM',
    'requirements.graphics': 'Gráficos',
    'requirements.storage': 'Almacenamiento',
    'requirements.cleo5': 'CLEO 5',
    'requirements.cleo5Desc': 'Librería de scripts esencial',
    'requirements.dyomDesc': 'Herramienta de creación de misiones',
    'requirements.cleoPlus': 'CLEO+',
    'requirements.cleoPlusDesc': 'Características mejoradas de CLEO',
    'requirements.essentials': 'Paquete Esencial',
    'requirements.essentialsDesc': 'Paquete todo-en-uno de requisitos',

    // Download Section
    'download.title': 'Sección de Descarga',
    'download.subtitle': 'Obtén todo lo que necesitas para comenzar tu viaje en Los Santos',
    'download.modpack': 'Paquete de Mods',
    'download.modpackDesc': 'Incluye todos los archivos esenciales para el mod. Recursos actualizados, modelos y configuraciones requeridas para jugar la última versión.',
    'download.storyline': 'Historia',
    'download.storylineDesc': 'La experiencia narrativa completa del Capítulo 2, incluyendo misiones actualizadas, nuevas cinemáticas y diálogos. El Capítulo 1 también está incluido. Requiere DYOM 8.1 Estable.',
    'download.patch': 'Parche Más Reciente',
    'download.patchDesc': 'Correcciones y ajustes opcionales. Las actualizaciones de parches se lanzarán por separado para mejorar la estabilidad y el rendimiento.',
    'download.updated': 'ACTUALIZADO',
    'download.required': 'Requerido',
    'download.comingSoon': 'Próximamente...',
    'download.installTitle': 'Instrucciones de Instalación',
    'download.step1': 'Descarga e instala todas las herramientas requeridas de la sección de Requisitos',
    'download.step2': 'Descarga el Paquete de Mods y extráelo en tu directorio de GTA San Andreas',
    'download.step3': 'Descarga la Historia y coloca los archivos DYOM en la carpeta DYOM',
    'download.step4': '¡Inicia el juego y disfruta tu aventura en Los Santos!',

    // Footer
    'footer.description': 'Un mod hecho por fanáticos que te lleva de vuelta a Los Santos de 1987 con el regreso de Ryder. Experimenta nuevas misiones, gráficos mejorados y guerra de pandillas inmersiva.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.discordCommunity': 'Comunidad Discord',
    'footer.userManual': 'Manual de Usuario',
    'footer.downloads': 'Descargas',
    'footer.legal': 'Legal',
    'footer.disclaimer': 'Este mod no está afiliado con Rockstar Games. GTA San Andreas Stories es un proyecto hecho por fanáticos creado solo con fines de entretenimiento. No hay monetización involucrada.',
    'footer.copyright': '© 2025 GTA San Andreas Stories.',

    // Gallery Images
    'gallery.groveStreet': 'Escena en Grove Street',
    'gallery.viceCity': 'Vibraciones de Vice City',
    'gallery.skyline': 'Horizonte de Los Santos',
    'gallery.territory': 'Territorio de Pandillas',
    'gallery.weapons': 'Selección de Armas',
    'gallery.safehouse': 'Interior de Casa Segura',
    'gallery.billboard': 'Cartelera Vintage',
    'gallery.characters': 'Alineación de Personajes',
    'gallery.briefing': 'Briefing de Misión',
    'gallery.chase': 'Persecución en Auto',
    'gallery.vehicle': 'Vehículo Personalizado',
    'gallery.ui': 'Vista Previa de la Interfaz',
    'gallery.gameplay': 'Jugabilidad Mejorada',
    'gallery.cutscene': 'Escena Cinemática de Misión'
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
