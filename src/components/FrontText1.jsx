import React, { useEffect, useRef } from 'react'
import '../styles/styles.css'

export default function FrontText1() {
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
        rootMargin: '0px 0px -200px 0px'
      }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  

  return (
    <section className='flex flex-row justify-center items-center h-160'>
      <div className='blur4 w-full flex flex-col justify-center items-center !h-120'>
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='fronttext1 md:!pt-22 md:!pb-22 md:!pl-6 md:!pr-6 md:w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
            <p
              ref={ref}
              className='ptext reveal-on-scroll text-center font-bold max-w-200'
            >
              I specialize in building user-centric websites and web apps with React.js, Astro, Next.js,
              WordPress and modern design tools (Figma etc.). I bring clarity to digital experiences, whether
              it’s clean code or clean layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
