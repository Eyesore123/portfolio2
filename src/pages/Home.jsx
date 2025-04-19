import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import FrontBanner from '../components/FrontBanner';
import FrontText1 from '../components/FrontText1';
import FrontText2 from '../components/FrontText2';
import TechStack from '../components/TechStack';
import Githubandcvs from '../components/Githubandcvs';
import TransitionCard from '../components/TransitionCard';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  const { t, i18n } = useTranslation();
  const [sequence, setSequence] = useState([]);
  const [key, setKey] = useState(0); // Key to force re-render

  // Update sequence when language changes
  useEffect(() => {
    // Create a new sequence array with current translations
    const newSequence = [
      t('home.heading1'), 4000,
      t('home.heading2'), 4000,
      t('home.heading3'), 4000,
      t('home.heading4'), 4000,
    ];
    
    setSequence(newSequence);
    setKey(prevKey => prevKey + 1); // Force TypeAnimation to re-render
  }, [t, i18n.language]); // Re-run when language changes

  return (
    <>
      <section className='!mr-20 md:!mr-30 lg:!-mt-10'>
        <div className='!ml-4 md:!ml-0 hero grid grid-cols-5 gap-14 md:gap-20 xl:gap-0 lg:!mr-0 2xl:!mr-0'>
          <div className='grid-span-1 flex flex-row justify-start items-center'></div>
          <div className='hero-text col-span-2 flex flex-col justify-center items-center'>
            <div>
              <h1 className='movingtext'>Joni Putkinen</h1>
              <div className='typingcontainer'>
                <h5 className='movingtext animationh5 flex flex-row text-start xl:justify-end m-0 p-0'>&nbsp;
                  <div style={{ display: 'inline-flex'}}>
                    {sequence.length > 0 && (
                      <TypeAnimation
                        key={key} // Key forces re-render when language changes
                        sequence={sequence}
                        wrapper="span"
                        speed={4}
                        repeat={Infinity}
                        cursor={false}
                        style={{ display: 'inline-block', fontWeight: 900 }}
                      />
                    )}
                    <span className="custom-cursor"></span>
                  </div>
                </h5>
              </div>
              <div className='flex flex-row justify-end items-center'>
                <a
                  href='/projects'
                  className='gradienttext flex flex-row justify-end !mt-20 font-bold'
                  id='projectsbtn'
                >
                  {t("home.button1")}
                </a>
              </div>
            </div>
          </div>
          <div className='w-40 md:w-full col-span-2 flex justify-center items-center 2xl:items-start 2xl:justify-start'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <img
                  id='profilepic'
                  src='/Heroimage.png'
                  alt='Joni Putkinen Front'
                  width={400}
                  height={400}
                  className='md:!pl-10'
                />
                {/* <img
                  id='profilepicreversed'
                  src='/Heroimage.png'
                  alt='Joni Putkinen Back'
                  width={400}
                  height={400}
                /> */}
              </div>
            </div>
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
  );
}
