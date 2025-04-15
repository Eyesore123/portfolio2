import React from 'react'
import '../styles/styles.css'

export default function FrontText1() {
  return (
    <>
    <section className='flex flex-row justify-center items-center h-160'>
    <div className='blur4 w-full flex flex-col justify-center items-center !h-120'>
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='fronttext1 md:!pt-22 md:!pb-22 md:!pl-6 md:!pr-6 md:w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
        <p className='flex flex-row justify-center items-center text-center ptext font-bold max-w-200'>I specialize in building user-centric websites and web apps with React.js,
Astro, Next.js, WordPress and modern design tools (Figma etc.). I bring clarity to digital experiences,
whether it’s clean code or clean layouts.</p>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}
