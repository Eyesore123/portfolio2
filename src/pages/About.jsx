import React from 'react'
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <>
    <section className='flex flex-row justify-center items-center'>
        <div className='fronttext1 md:!pt-12 md:!pb-22 md:!pl-6 md:!pr-6 min-w-[70%] lg:max-w-[70%] flex flex-col gap-10 justify-center items-center'>
            <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold'>{t("about.header1")}</h2>
            <div className='!pt-12 !pb-22 !pl-0 !pr-0 md:!pl-6 md:!pr-6 w-[100%] flex flex-col justify-center items-center gap-20'>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.intro")}</p>
              
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>{t("about.header2")}</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.academia")}</p>
              
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>{t("about.header3")}</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.learning")}</p>
              
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.philosophy")}</p>
              
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.techstack")}</p>
              
              <ul className='flex flex-col justify-center items-center text-center font-bold w-full max-w-200'>
                  <li>{t("about.techlist1")}</li>
                  <li>{t("about.techlist2")}</li>
                  <li>{t("about.techlist3")}</li>
                  <li>{t("about.techlist4")}</li>
                  <li>{t("about.techlist5")}</li>
                  <li>{t("about.techlist6")}</li>
                  <li>{t("about.techlist7")}</li>
                </ul>
                
                <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.languages")}</p>
              
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>{t("about.header4")}</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.ai")}</p>
              
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.growth")}</p>
              
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200'>{t("about.header5")}</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.whoiam")}</p>
              
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>
                {t("about.future")}
              </p>
              
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.portfolio")}</p>
              
              <button className='btn btn-primary !mb-40'>
                <a href="https://eyesore123.github.io/Joni-s-portfolio/" target='_blank' rel="noopener noreferrer">
                  {t("home.button")}
                </a>
              </button>
          </div>
        </div>
    </section>
    </>
  )
}
