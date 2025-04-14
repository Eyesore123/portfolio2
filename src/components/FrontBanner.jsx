import React from 'react'
import '../styles/styles.css'

export default function FrontBanner() {
  return (
    <>
    <section className='flex flex-row justify-center items-center'>
        <div className='frontbanner !mt-10 !pt-22 !pb-22 !pl-6 !pr-6 min-w-[60%] lg:max-w-[70%] flex flex-row justify-center items-center'>
        <h2 className='gradienttext flex flex-row justify-center items-center'>Crafting creative web apps<br /> since 2023!</h2>
        </div>
    </section>
    </>
  )
}
