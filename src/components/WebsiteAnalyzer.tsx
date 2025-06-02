import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WebsiteAnalyzer() {

    const { t } = useTranslation();

  return (
    <div className="bg-[#111] shadow-xl rounded-2xl min-h-[513px] flex flex-col justify-evenly !p-6 border border-[#2c2c2c]">
      <h5 className="gradienttext font-bold !mb-4 text-center text-white">
        {t('websiteAnalyzer.header')}
      </h5>

      <p className="text-sm gradienttext !mb-6 text-center">
        {t('websiteAnalyzer.subheader')}
      </p>

      <div className='text-gray-300 text-[14px] font-semibold mb-6 text-center break-words'>
        {t('websiteAnalyzer.description')}
      </div>


      <a
        href="https://adorable-crocodile-181.convex.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center font-semibold !py-2 !px-4 !mt-4 rounded bg-gradient-to-r from-[#ffc600] to-[#e900ff] text-black hover:opacity-80"
      >
        {t('websiteAnalyzer.button')}
      </a>
    </div>
  );
}
