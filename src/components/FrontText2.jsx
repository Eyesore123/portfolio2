import React, { useEffect, useRef } from 'react'
import '../styles/styles.css'

export default function FrontText2() {
    const ref = useRef()
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add('reveal-visible')
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -300px 0px'
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
        <div className='fronttext1 !pt-22 !pb-22 !pl-6 !pr-6 md:w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
        <p
        ref={ref}
         className='flex flex-row justify-center items-center text-center ptext reveal-on-scroll font-bold max-w-200'>I aim to craft websites and web apps that not only look great but also
        help businesses grow, reach more people and make a lasting impression. </p>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}