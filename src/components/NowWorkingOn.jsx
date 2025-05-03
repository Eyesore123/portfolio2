import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function NowWorkingOn() {

    const { t } = useTranslation();

  return (
    <section className='flex flex-row justify-center items-center !pt-0 !mt-0'>
        <div className='!mt-10 !pb-12 !mb-0 !pl-6 !pr-6 w-[60%] flex flex-col justify-center items-center text-center'>

            <h2 className='gradienttext text-2xl !mb-14'>{t("nowworkingon.header")}:</h2>

            <div className='relative bg-[var(--transparent)] border border-bg-gradient-to-r from-[#5800ff] to-[#e900ff] rounded-2xl !px-8 !py-10 shadow-[0_0_20px_rgba(233,0,255,0.4)] w-full max-w-md backdrop-blur-sm animate-border-glitch'>

                <p className='text-[var(--text-color2)] text-xl font-bold tracking-wide mb-3 text-shadow'>
                    {t("nowworkingon.projectTitle")}
                </p>
                <p className='text-[var(--text-color)] text-base leading-relaxed mb-2 text-shadow'>
                    {t("nowworkingon.description")}
                </p>
                <p className='text-[var(--text-color3)] text-sm italic tracking-tight text-shadow'>
                    {t("nowworkingon.eta")}
                </p>

                <style jsx>{`
                    @keyframes border-glitch {
                    0% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
                    25% { border-image-source: linear-gradient(135deg, #5800ff, #e900ff); }
                    50% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
                    75% { border-image-source: linear-gradient(135deg, #5800ff, #e900ff); }
                    100% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
                    }

                    .animate-border-glitch {
                    animation: border-glitch 0.5s infinite ease-in-out;
                    border-image-slice: 1;
                    border-width: 3px;
                    }

                    .text-shadow {
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 10px rgba(233, 0, 255, 1);
                    }
                `}</style>
            </div>
        </div>
    </section>
  )
}
