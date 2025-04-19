import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function TransitionCard() {

  const { t } = useTranslation();

  return (
    <>
    <section className='flex flex-row justify-center items-center'>
        <div className='fronttext1 !pt-22 !pb-22 !pl-6 !pr-6 md:w-[60%] lg:max-w-[60%] flex flex-col gap-10 justify-center items-center'>
            <h2 className='gradienttext flex flex-row justify-center items-center text-center ptext font-bold'>{t("home.header3")}</h2>
            <div>
                <button className='btn btn-primary !mb-40'>
                    <Link to='/about'>{t("home.button")}</Link>
                </button>
            </div>
        </div>
    </section>
    </>
  )
}
