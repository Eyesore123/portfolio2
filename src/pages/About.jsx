import React, { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next';
import BackToTopButton from '../components/BackToTopButton';
import '../styles/styles.css';

export default function About() {
  const { t } = useTranslation();
  const blogLink = 'https://blog-app-production-16c2.up.railway.app/';
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <section className='flex flex-row justify-center items-center !-mt-2'>
        <div className='fronttext1 md:!pt-4 md:!pb-0 md:!pl-6 md:!pr-6 min-w-[70%] lg:max-w-[70%] flex flex-col gap-0 justify-center items-center'>
          <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold'>{t("about.header1")}</h2>

          <div
            style={{
              position: 'relative',
              width: 340,
              height: 340,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className="!mt-4 lg:!mt-10"
          >
            {/* Spinner (same as Home.jsx) */}
            {!imageLoaded && (
              <div style={{
                width: 340,
                height: 340,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
                borderRadius: '50%',
                background: '#000'
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  border: '6px solid transparent',
                  borderTop: '6px solid',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  borderImage: 'linear-gradient(45deg, #5800ff, #e900ff) 1'
                }} />
              </div>
            )}
            {/* Image with thicker gradient border (perfect circle) */}
            {imageLoaded && (
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #ffc600, #e900ff)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: 270,
                    height: 270,
                    borderRadius: '50%',
                    background: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src="/fallbackimage.jpg"
                    alt="Blog post thumbnail"
                    width={270}
                    height={270}
                    className="object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            )}
            {/* Preload image for onLoad event */}
            <img
              src="/fallbackimage.jpg"
              alt="Blog post thumbnail"
              width={340}
              height={340}
              style={{ display: 'none' }}
              onLoad={() => setImageLoaded(true)}
            />
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg);}
                  100% { transform: rotate(360deg);}
                }
              `}
            </style>
          </div>

          <div className='!pt-12 !pb-22 !pl-0 !pr-0 md:!pl-6 md:!pr-6 w-[100%] flex flex-col justify-center items-center !gap-10 xl:!gap-16'>
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.intro")}</p>

            <p className='text-center font-bold w-full max-w-200'>
              <Trans
                i18nKey="about.blogLink"
                components={[
                  <a
                    href={blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-center font-bold inline movingtext hover:opacity-80'
                  />
                ]}
              />
            </p>

            <h6 className='gradienttext movingtext flex flex-row justify-center items-center text-center font-bold max-w-200 '>{t("about.header2")}</h6>
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.academia")}</p>
            
            <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>{t("about.header3")}</h6>
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.learning")}</p>
            
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.philosophy")}</p>
            
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.techstack")}</p>
            
            <ul className='flex flex-col justify-center items-center text-center font-bold w-full max-w-200'>
              <li>{t("about.techlist1")}</li>
              <li>{t("about.techlist2")}</li>
              <li>{t("about.techlist3")}</li>
              <li>{t("about.techlist4")}</li>
              <li>{t("about.techlist5")}</li>
              <li>{t("about.techlist6")}</li>
              <li>{t("about.techlist7")}</li>
            </ul>
            
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.languages")}</p>
            
            <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>{t("about.header4")}</h6>
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.ai")}</p>
            
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.growth")}</p>
            
            <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200'>{t("about.header5")}</h6>
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.whoiam")}</p>
            
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>
              {t("about.future")}
            </p>
            
            <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>{t("about.portfolio")}</p>
            
            <button className='btn btn-primary !mb-40'>
              <a href="https://eyesore123.github.io/Joni-s-portfolio/" target='_blank' rel="noopener noreferrer">
                {t("home.button")}
              </a>
            </button>
          </div>
        </div>
        <BackToTopButton/>
      </section>
    </>
  )
}