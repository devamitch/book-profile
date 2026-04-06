import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  hi: { nativeName: 'हिन्दी' },
  es: { nativeName: 'Español' },
  fr: { nativeName: 'Français' },
  de: { nativeName: 'Deutsch' },
  ja: { nativeName: '日本語' },
  kn: { nativeName: 'ಕನ್ನಡ' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng as keyof typeof lngs].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
