import React, { useEffect, useRef } from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function FrontText2() {
    const ref = useRef()
    const { t } = useTranslation();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add('reveal-visible')
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -200px 0px'
        }
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])

  return (
    <>
    <section className='flex flex-row justify-center items-center h-160'>
    <div className='blur4 w-full flex flex-col justify-center items-center !h-120'>
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='fronttext1 md:!pt-16 !pb-22 !pl-6 !pr-6 md:w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
        <p
        ref={ref}
         className='!mt-12 md:!mt-0 flex flex-row justify-center items-center text-center ptext reveal-on-scroll font-bold max-w-200'>{t("home.frontText2")} </p>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}