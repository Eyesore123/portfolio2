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
            <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold w-full'>{t("contact.header1")}</h2>
            <div className='!pt-12 !pb-22 flex flex-col justify-center items-center gap-10 md:gap-20 w-full'>
              <div className='flex flex-row justify-center items-center text-center font-bold w-full !pr-4 !pl-4'>{t("contact.p1")}</div>
              
              {/* Icons and contact info */}
              <div className='flex flex-col gap-10 '>

                <div className='flex flex-row justify-start items-center gap-10 md:gap-20 lg:!ml-10'>
                <img src='/Phone.svg' className='phoneicon' style={{width: '40px', height: '40px', filter: 'invert(1)'}} alt="Phone Icon" />+358449627207
                </div>
                <div className='flex flex-row justify-start items-center gap-10 md:gap-20 lg:!ml-10'>
                <img src='/Envelope.svg' className='emailicon' style={{width: '40px', height: '40px', filter: 'invert(1)'}} alt="Phone Icon" /> joni.putkinen@protonmail.com
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
