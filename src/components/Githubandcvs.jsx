import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function Githubandcvs() {

    const { t } = useTranslation();

  return (
    <>
        <section className='flex flex-row justify-center items-center'>
            <div className='!mt-10 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
            <h2 className='gradienttext flex flex-row justify-center items-center'>{t("home.header2")}</h2>
            </div>
            <div className='splitcontainer grid grid-cols-2 gap-20 md:gap-0 min-h-60 w-[50%] lg:max-w-[50%]'>
                <div className='githubcontainer flex flex-col items-center'>
                    <h5 className='github ptext w-full flex justify-center !mb-12'>
                Github
                    </h5>
                    <div className='flex flex-col justify-center items-center !mb-6'>
                        <div>
                        <a href='https://github.com/Eyesore123/' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        <img src='/githubicon.png' width={100} alt='githubicon' className='githubicon hover:opacity-80' />
                        </a>
                        </div>
                    </div>
                </div>
                <div className='cvcontainer flex flex-col justify-center items-center'>
                    <h5 className='cv ptext w-full flex justify-center'>
                        {t("home.header4")}
                    </h5>
                    <div className='flex flex-col justify-center items-center'>


                        <small className='cvsmall orange !mt-8'>
                        {t("home.buttonheader1")}
                        </small>
                        <a href="/CVs/english.pdf" download="CV_Joni_Putkinen">
                        <button className='btn btn-primary !m-6'>{t("home.downloadbutton")}</button>
                        </a>

                        <small className='cvsmall orange !mt-12'>
                        {t("home.buttonheader2")}
                        </small>
                        <a href='/CVs/english_it.pdf' download="CV_Joni_Putkinen_IT">
                        <button className='btn btn-primary !m-6'>{t("home.downloadbutton")}</button>
                        </a>

                    </div>
                </div>
            </div>
        </section>
        </>
  )
}
