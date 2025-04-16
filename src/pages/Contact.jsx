import React from 'react'
import Phoneicon from '../assets/Phone.svg';
import Emailicon from '../assets/Envelope.svg';

export default function Contact() {
  return (
    <>
    <section className='flex flex-row justify-center items-center h-[67vh] !mb-30'>
        <div className='fronttext1 !pt-12 !pb-22 !pl-6 !pr-6 min-w-[70%] lg:max-w-[70%] flex flex-col gap-10 justify-center items-center'>
            <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold'>Contact Me</h2>
            <div className='!pt-12 !pb-22 !pl-6 !pr-6 w-[100%] flex flex-col justify-center items-center gap-20'>
              <div className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>Call me or send me an email. I'll get back to you as soon as possible.</div>
              <div className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>
              {/* Icons and contact info */}
              <div className='flex flex-col gap-10 md:gap-20'>
                <div className='flex flex-row justify-start items-center gap-20'>
                <img src={Phoneicon} className='phoneicon' style={{width: '40px', height: '40px', filter: 'invert(1)'}} alt="Phone Icon" />+358449627207
                </div>
                <div className='flex flex-row justify-start items-center gap-20'>
                <img src={Emailicon} className='emailicon' style={{width: '40px', height: '40px', filter: 'invert(1)'}} alt="Phone Icon" /> joni.putkinen@protonmail.com
                </div>
              </div>
              </div>
              
          </div>
        </div>
    </section>
    </>
  )
}
