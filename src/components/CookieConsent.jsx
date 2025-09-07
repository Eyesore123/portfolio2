import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const cookieSettingsTemplate = {
    necessary: false,
    optional: false,
  };

  const [settings, setSettings] = useState(cookieSettingsTemplate);
    const { t } = useTranslation();

  // Load consent on mount
  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent');
    if (!cookieConsent) {
      setVisible(true);
    } else {
      try {
        const parsed = JSON.parse(cookieConsent);
        setSettings(parsed);
      } catch {
        // fallback if parsing fails
        setVisible(true);
      }
    }
  }, []);

  const saveConsent = (consent) => {
    Cookies.set('cookie_consent', JSON.stringify(consent), { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

    return (
    <div className="cookiediv fixed bottom-0 left-0 right-0 bg-black text-white !p-6 flex flex-col md:flex-row items-start md:items-center justify-between !space-y-4 md:!space-y-0 md:!space-x-4 !z-50 shadow-lg border-t border-[#5800FF]">
        <div className="flex-1 xl:!ml-12 2xl:!ml-50">
        <div className="!mb-3">
            {t('cookieConsent.description')}
        </div>

        <div className="space-y-2">
            <label className="flex !items-center !space-x-2">
            <input type="checkbox" checked disabled className="cursor-not-allowed" />
            <span>{t('cookieConsent.necessary')}</span>
            </label>

            <label className="flex !items-center !space-x-2">
            <input
                type="checkbox"
                checked={settings.optional}
                onChange={(e) =>
                setSettings({ ...settings, optional: e.target.checked })
                }
                className="cookie-consent input[type='checkbox']"
            />
            <span>{t('cookieConsent.optional')}</span>
            </label>
        </div>
        </div>

        <div className="flex flex-col md:flex-row !space-y-2 md:!space-y-0 md:!space-x-3">
        <button
            onClick={() => saveConsent(settings)}
            className="bg-[#5800FF] hover:bg-[#5800FF]/80 text-white !px-4 !py-2 rounded shadow-md transition-colors"
        >
            {t('cookieConsent.accept')}
        </button>
        <button
            onClick={() => saveConsent({ necessary: true, optional: false })}
            className="bg-[#E900FF] hover:bg-[#E900FF]/80 text-white !px-4 !py-2 rounded shadow-md transition-colors"
        >
            {t('cookieConsent.decline')}
        </button>
        </div>
        {/* <div className='blur3'></div> */}
    </div>
    );
}