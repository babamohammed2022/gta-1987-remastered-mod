import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-gradient">
              GTA San Andreas Stories
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
              {t('footer.quickLinks')}
            </h3>
            <div className="space-y-2">
              <a
                href="https://discord.gg/t5SjMrAJNh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                {t('footer.discordCommunity')}
              </a>
              <a
                href="https://gtasasmanual.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                {t('footer.userManual')}
              </a>
              <a
                href="#download"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("download")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t('footer.downloads')}
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
              {t('footer.legal')}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} GTA San Andreas Stories.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
