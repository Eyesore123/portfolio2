// SkillsFocus.jsx

import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function SkillsFocus() {

  const { t } = useTranslation();

  return (
    <section className='flex flex-row justify-center items-center'>
      <div className='!mt-10 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-col justify-center items-center text-center'>

        <h2 className='gradienttext text-2xl mb-4'>{t("skillsfocus.header")}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>

          <div className='bg-gray-900 text-white p-4 rounded-xl shadow-lg'>
            <p className='text-lg font-semibold mb-2'>{t("skillsfocus.strengths.title")}</p>
            <ul className='text-sm text-gray-300 list-disc list-inside text-left'>
              <li>{t("skillsfocus.strengths1")}</li>
              <li>{t("skillsfocus.strengths2")}</li>
              <li>{t("skillsfocus.strengths3")}</li>
            </ul>
          </div>

          <div className='bg-gray-900 text-white p-4 rounded-xl shadow-lg'>
            <p className='text-lg font-semibold mb-2'>{t("skillsfocus.improving.title")}</p>
            <ul className='text-sm text-gray-300 list-disc list-inside text-left'>
              <li>{t("skillsfocus.improving1")}</li>
              <li>{t("skillsfocus.improving2")}</li>
              <li>{t("skillsfocus.improving3")}</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
