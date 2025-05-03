import React, { useState, useEffect } from 'react';
import FrontBanner from '../components/FrontBanner';
import FrontText1 from '../components/FrontText1';
import FrontText2 from '../components/FrontText2';
import TechStack from '../components/TechStack';
import Githubandcvs from '../components/Githubandcvs';
import TransitionCard from '../components/TransitionCard';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [sequence, setSequence] = useState([]);
  const [key, setKey] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const newSequence = [
      t('home.heading1'), 4000,
      t('home.heading2'), 4000,
      t('home.heading3'), 4000,
      t('home.heading4'), 4000,
    ];
    setSequence(newSequence);
    setKey(prevKey => prevKey + 1);
  }, [t, i18n.language]);

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
                        key={key}
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
              {/* <div className='flip-card-inner' style={{ position: 'relative', width: '400px', height: '400px' }}> */}
                {!imageLoaded && (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      border: '6px solid transparent',
                      borderTop: '6px solid',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      borderImage: 'linear-gradient(45deg, #5800ff, #e900ff) 1'
                    }} />
                  </div>
                )}
                <img
                  id='profilepic'
                  src='/Heroimage.png'
                  alt='Joni Putkinen Front'
                  width={400}
                  height={400}
                  className='md:!pl-10'
                  onLoad={handleImageLoad}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                />
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
      <FrontBanner />
      <FrontText1 />
      <TechStack />
      <FrontText2 />
      <Githubandcvs />
      <TransitionCard />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
