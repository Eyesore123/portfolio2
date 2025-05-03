import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function NowWorking() {

  const { t } = useTranslation();

  return (
    <>
    <section className='flex flex-row justify-center items-center !md:mt-10'>
        <div className='md:!mt-50 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
        <h2 className='gradienttext flex flex-row justify-center items-center'>{t("projects.nowlearning")}</h2>
        </div>
        <div className="learning-container">
            <div className="tech-stack-icon">
            <a href='https://laravel.com/' target='_blank' rel='noopener noreferrer' className="hover:opacity-80">
                <img src='/laravel.svg' alt="Laravel" />
            </a>
            </div>
            <div className="tech-stack-icon">
            <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' className="hover:opacity-80">
                <img src='/react-original.svg' alt="React" />
            </a>
            </div>
            <div className="tech-stack-icon">
            <a href='https://www.postgresql.org/' target='_blank' rel='noopener noreferrer' className="hover:opacity-80">
                <img src='/postgres.svg' alt="PosgreSQL" />
            </a>
            </div>
      </div>
    </section>
    </>
  )
}