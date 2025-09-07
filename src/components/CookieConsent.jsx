import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const cookieSettingsTemplate = {
    necessary: false,
    optional: false,
  };

  const [settings, setSettings] = useState(cookieSettingsTemplate);

  // ... rest of the code ...

  return (
    <div className="cookiediv fixed bottom-0 left-0 right-0 bg-black text-white !p-6 flex flex-col md:flex-row items-start md:items-center justify-between !space-y-4 md:!space-y-0 md:!space-x-4 !z-50 shadow-lg border-t border-[#5800FF]">
      <div className="flex-1 xl:!ml-12 2xl:!ml-34">
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
    </div>
  );
}