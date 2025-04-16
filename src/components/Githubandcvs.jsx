import React from 'react'
import '../styles/styles.css'

export default function Githubandcvs() {
  return (
    <>
        <section className='flex flex-row justify-center items-center'>
            <div className='!mt-10 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-row justify-center items-center'>
            <h2 className='gradienttext flex flex-row justify-center items-center'>Check out my Github and CV:</h2>
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
                        CVs
                    </h5>
                    <div className='flex flex-col justify-center items-center'>
                        <small className='cvsmall orange !mt-12'>
                        CV for IT field:
                        </small>
                        <button className='btn btn-primary !m-6'>download</button>
                        <small className='cvsmall orange !mt-8'>
                        General CV:
                        </small>
                        <button className='btn btn-primary !m-6'>download</button>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}
