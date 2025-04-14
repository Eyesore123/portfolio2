
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
    <div className='hero grid grid-cols-5 gap-18'>
    <div className='grid-span-1 flex flex-row justify-start items-center'>
    </div>
      <div className='hero-text col-span-2 flex flex-col justify-center items-center'>
        <div>
          <h1 className='gradienttext'>Joni Putkinen</h1>
          <h5 className='gradienttext flex flex-row justify-end m-0 p-0'>Web Developer / Designer</h5>
          <div className='flex flex-row justify-end items-center'>
          <a href='/projects' className='gradienttext flex flex-row justify-end !mt-20 font-bold' id='projectsbtn'>Recent projects
          </a>
          </div>
        </div>
      </div>
      <div className='col-span-2 flex flex-row flex-end'>
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
