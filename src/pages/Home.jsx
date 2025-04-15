
import React from 'react';
import '../styles/styles.css';
import FrontBanner from '../components/FrontBanner';
import FrontText1 from '../components/FrontText1';
import FrontText2 from '../components/FrontText2';
import TechStack  from '../components/TechStack';
import Githubandcvs from '../components/Githubandcvs';
import TransitionCard from '../components/TransitionCard';

export default function Home() {
  return (
    <>
    <section className='!mr-30'>
    <div className='!ml-4 md:!ml-0 hero grid grid-cols-5 gap-10 md:gap-18'>
    <div className='grid-span-1 flex flex-row justify-start items-center'>
    </div>
      <div className='hero-text col-span-2 flex flex-col justify-center items-center'>
        <div>
          <h1 className='movingtext'>Joni Putkinen</h1>
          <h6 className='movingtext flex flex-row text-start xl:justify-end m-0 p-0'>Web Developer / Designer</h6>
          <div className='flex flex-row justify-end items-center'>
          <a href='/projects' className='gradienttext flex flex-row justify-end !mt-20 font-bold' id='projectsbtn'>Recent projects
          </a>
          </div>
        </div>
      </div>
      <div className='w-40 md:w-full col-span-2 flex flex-row flex-end'>
        <img className='heroimage !ml-10' src="/Heroimage.png" alt="Joni Putkinen" />
      </div>
    </div>
    </section>
    <FrontBanner />
    <FrontText1 />
    <TechStack />
    <FrontText2 />
    <Githubandcvs />
    <TransitionCard />
    </>
  )
}
