import React from 'react'
import StackContainer from './StackContainer'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function TechStack() {

  const { t } = useTranslation();

  return (
    <>
    <section className='flex flex-row justify-center items-center'>
        <div className='!mt-10 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
        <h2 className='gradienttext flex flex-row justify-center items-center'>{t("home.header1")}</h2>
        </div>
        <StackContainer/>
    </section>
    </>
  )
}
