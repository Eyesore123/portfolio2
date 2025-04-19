import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function FrontBanner() {

  const { t } = useTranslation();
  
  return (
    <>
    <section className='flex flex-row justify-center items-center'>
        <div className='frontbanner !mt-10 md:!mt-4 !pt-22 !pb-22 !pl-6 !pr-6 !min-w-[70%] lg:max-w-[70%] flex flex-row justify-center items-center'>
        <h2 className='movingtext flex flex-row justify-center items-center'>{t("home.frontbannerline1")}<br />
        {t("home.frontbannerline2")}
        </h2>
        </div>
    </section>
    </>
  )
}
