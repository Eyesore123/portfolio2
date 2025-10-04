import React from 'react'
import '../styles/styles.css'
import ContactForm from '../components/ContactForm';
import BackToTopButton from '../components/BackToTopButton';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-row justify-center items-center !mb-0 !-mt-2 md:!-mt-10 w-full'>
        <div className='md:!pt-12 !pb-22 md:!pl-0 md:!pr-0 flex flex-col gap-10 justify-center items-center'>
          <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold w-full'>
            {t("contact.header1")}
          </h2>

          <div className='!pt-12 !pb-22 flex flex-col justify-center items-center gap-10 md:gap-20 w-full'>
            <div className='flex flex-row justify-center items-center text-center font-bold w-full !pr-4 !pl-4'>
              {t("contact.p1")}
            </div>

            {/* Icons and contact info */}
            <div className='flex flex-col gap-10'>
              <div className='flex flex-row justify-start items-center gap-10 md:gap-20 lg:!ml-16'>
                {/* Phone Inline SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" 
                  height="30" 
                  viewBox="0 0 24 24" 
                  fill="white"
                  className="inline-block"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.2.48 2.5.74 3.86.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.26 2.66.74 3.86.14.27.05.61-.27 1.11l-2.35 2.82z"/>
                </svg>
                +358449627207
              </div>

              <div className='flex flex-row justify-start items-center gap-10 md:gap-20 lg:!ml-16'>
                {/* Envelope Inline SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" 
                  height="30" 
                  viewBox="0 0 24 24" 
                  fill="white"
                  className="inline-block"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                joni.putkinen@protonmail.com
              </div>

              <ContactForm/>
            </div>
          </div>
        </div>
        <BackToTopButton/>
      </div>
    </>
  )
}
