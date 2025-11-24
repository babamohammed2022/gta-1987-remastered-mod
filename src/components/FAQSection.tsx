import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const faqs = [
    {
      question: "In what year and location does the mod take place?",
      answer: "The mod is set in 1987 in Los Santos, a city on the brink of chaos where rival gangs, including the notorious Grove Street Families, battle for control."
    },
    {
      question: "Who is the central figure leading the story?",
      answer: 'The main character is Lance "Ryder" Wilson, a loyal member of the Grove Street Families who returns from Vice City to strengthen the gang during CJ\'s absence.'
    },
    {
      question: "What prompted CJ to leave Los Santos originally?",
      answer: "CJ, or Carl Johnson, departed Los Santos after his brother Brian's death, relocating to Liberty City and leaving the Grove Street Families in the care of his brother Sweet and others."
    },
    {
      question: "Which characters serve as the primary antagonists in this narrative?",
      answer: 'Victor "Viper" Mendez is the main antagonist, a merciless drug lord connected to a South American cartel aiming to expand his empire throughout Los Santos, targeting the Grove Street Families.'
    },
    {
      question: "Does the storyline consist of multiple parts or chapters?",
      answer: "Yes, the storyline is structured into three intense chapters featuring brutal gang wars and missions that challenge Ryder and his crew."
    },
    {
      question: "Is there any news about future expansions or additional content?",
      answer: "Plans include downloadable content (DLC) to extend and enrich the mod's storyline and gameplay after the initial release."
    },
    {
      question: "Where can I get the latest news and updates about the mod's development?",
      answer: 'Updates are available on the official Discord server and the YouTube channel named "cerdopalo."'
    },
    {
      question: "How drastically will this mod alter the original Grand Theft Auto: San Andreas experience?",
      answer: "The mod significantly revamps many aspects including missions, characters, gameplay systems, and visuals to create an alternative 1987 Los Santos experience."
    },
    {
      question: "Which gangs are featured within the mod's storyline?",
      answer: "Gangs such as the Grove Street Families, Ballas, La Sombra del Cuervo, Vagos, Seville Boulevard Families, Temple Drive Families, Aztecas, Russian Mafia, and Sindaccos play roles in the story."
    },
    {
      question: "Who allies with the Grove Street Families throughout the story?",
      answer: "Their allies include the Seville Boulevard Families, Temple Drive Families, and Tommy Vercetti."
    },
    {
      question: "What is Ryder's background prior to returning to Los Santos?",
      answer: "Ryder worked for Tommy Vercetti in Vice City before coming back to rejoin the Grove Street Families."
    },
    {
      question: "Are there new characters introduced specifically for this mod?",
      answer: "Yeah, there are some new characters included, like new officers, new enemies (like Victor Mendez), and new allies such as LB."
    },
    {
      question: "Does AI behavior change compared to the original game?",
      answer: "Yes, it partially changes. Some mechanics are now more similar to those in older GTA titles, such as GTA LCS and GTA VCS. For example, the Good Citizen Bonus has been reintroduced with very similar mechanics."
    },
    {
      question: "Are there optional side missions included in the mod?",
      answer: "Yes, side missions like Pizza Delivery, Trash Dash, and an upcoming Drug Bust Operation are featured, with mission vehicles accessible in locations such as Idlewood and Willowfield."
    },

    {
      question: "Does the mod support GInput or controller mods?",
      answer: "No, the mod does not support GInput or controller mods. It is designed for keyboard controls only. If you manage to get a controller working with the mod, please inform the development team or the project owner."
    },

    {
      question: "Can I replay missions or choose mission order?",
      answer: "You can replay missions by restarting the storyline, but the mission order cannot be changed. The storyline remains linear."
    },

    {
      question: "Does the mod work on Windows 10/11 or only older PCs?",
      answer: "From various tests, the mod is confirmed to work on Windows 7 (with solid performance), Windows 10, and Windows 11. It is unknown if the mod works on older operating systems like Windows Vista."
    },

    {
      question: "Where do I install the modpack?",
      answer: "Install the modpack in your main GTA San Andreas folder. It must be a clean installation without SAMP or any other mods."
    },
    {
      question: "Where do I install DYOM and the storyline?",
      answer: "Install DYOM and the storyline into your GTA San Andreas User Files folder (found in Documents). CLEO 5 is required. Do NOT place the storyline into the main game directory or the modpack into the User Files — this will break the mod."
    },
    {
      question: "Can I install DYOM inside the GTA San Andreas directory?",
      answer: "No. DYOM must be installed in Documents/GTA San Andreas User Files, not inside the main game directory. Placing it in the wrong folder will cause crashes or prevent the mod from loading."
    },
    {
      question: "What are the limitations of this mod?",
      answer: "This mod does not support multiplayer (like SAMP), heavy CLEO mods, or total conversion packs. It's built for a single-player gameplay with a focus on custom missions and storyline."
    },
    {
      question: "Are there any special features or hidden easter eggs included in the mod?",
      answer: "Yes, the mod includes several hidden easter eggs such as secret locations, unique dialogue lines, and references to classic GTA lore that players can discover throughout Los Santos."
    },
    {
      question: "Are there special collectibles or hidden items unique to this mod?",
      answer: "Yes, GTA SAS features unique collectibles, such as cigarettes, scattered throughout Los Santos for players to find."
    },
    {
      question: "Are there any rampages inspired by GTA VCS/GTA VC in the mod?",
      answer: "Yes, the modification introduces 10 new rampages inspired by GTA VCS/GTA VC."
    },
    {
      question: "Are there cheat codes or special scripts included?",
      answer: "Yes, the game includes several cheat codes and special scripts, including outfit-changing cheats and weapon access codes."
    },
    {
      question: "Why does a mission softlock or crash?",
      answer: 'If you encounter a mission bug, freeze, or softlock, you can temporarily bypass it by typing the cheat code "SKIP", that allows you to omit the on-going mission. This will allow you to continue playing while the bug is being investigated or fixed.'
    },
    {
      question: "Why does the red mission marker disappear after long play sessions?",
      answer: "This can happen due to engine memory leakage during extended gameplay sessions. Restarting the game is recommended to restore the markers. (Note:
