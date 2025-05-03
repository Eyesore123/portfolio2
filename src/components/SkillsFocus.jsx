import React from 'react';
import '../styles/styles.css';
import { useTranslation } from 'react-i18next';

export default function SkillsFocus() {
  const { t } = useTranslation();

  return (
    <section className='flex flex-row justify-center items-center !pt-0 !mt-0'>
      <div className='!mt-10 !pb-22 !mb-20 !pl-6 !pr-6 flex flex-col justify-center items-center text-center'>

        <h2 className='gradienttext text-2xl !mb-14'>{t('skillsfocus.header')}</h2>

        <div className='relative bg-[var(--transparent)] border border-bg-gradient-to-r from-[#5800ff] to-[#e900ff] rounded-2xl !p-6 shadow-[0_0_20px_rgba(233,0,255,0.10)] w-full max-w-md backdrop-blur-sm animate-border-glitch'>

          <h5 className='text-[var(--text-color2)] text-xl font-bold tracking-wide !mb-10 !mt-10'>
            {t('skillsfocus.strengthstitle')}
          </h5>
          <ul className='flex flex-col gap-2 text-left mb-6'>
            <li className='flex items-center text-[var(--text-color)] text-base leading-relaxed text-shadow'>
              <span className='!mr-8 flame-animation text-red-500 text-lg'>🔥</span>
              {t('skillsfocus.strengths1')}
            </li>
            <li className='flex items-center text-[var(--text-color)] text-base leading-relaxed text-shadow'>
              <span className='!mr-8 flame-animation text-red-500 text-lg'>🔥</span>
              {t('skillsfocus.strengths2')}
            </li>
            <li className='flex items-center text-[var(--text-color)] text-base leading-relaxed text-shadow'>
              <span className='!mr-8 flame-animation text-red-500 text-lg'>🔥</span>
              {t('skillsfocus.strengths3')}
            </li>
          </ul>

          <h5 className='text-[var(--text-color2)] text-xl font-bold tracking-wide !mb-10 !mt-10'>
            {t('skillsfocus.improvingtitle')}
          </h5>
          <ul className='flex flex-col gap-2 text-left'>
            <li className='flex items-center text-[var(--text-color)] text-base leading-relaxed text-shadow'>
              <span className='!mr-8 animate-arrow-move text-green-400 text-lg'>🚀</span>
              {t('skillsfocus.improving1')}
            </li>
            <li className='flex items-center text-[var(--text-color)] text-base leading-relaxed text-shadow'>
              <span className='!mr-8 animate-arrow-move text-green-400 text-lg'>🚀</span>
              {t('skillsfocus.improving2')}
            </li>
            <li className='flex items-center text-[var(--text-color)] text-base leading-relaxed text-shadow'>
              <span className='!mr-8 animate-arrow-move text-green-400 text-lg'>🚀</span>
              {t('skillsfocus.improving3')}
            </li>
          </ul>

          <style jsx>{`
            @keyframes border-glitch {
              0% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
              25% { border-image-source: linear-gradient(135deg, #5800ff, #e900ff); }
              50% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
              75% { border-image-source: linear-gradient(135deg, #5800ff, #e900ff); }
              100% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
            }

            @keyframes flame-animation {
              0% {
                transform: scale(1);
                opacity: 0.8;
                filter: brightness(1.8);
              }
              50% {
                transform: scale(1.2);
                opacity: 1;
                filter: brightness(1.6);
              }
              100% {
                transform: scale(1);
                opacity: 0.8;
                filter: brightness(1.8);
              }
            }

            @keyframes arrow-move {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-3px);
              }
              100% {
                transform: translateY(0);
              }
            }

            .animate-border-glitch {
              animation: border-glitch 0.5s infinite ease-in-out;
              border-image-slice: 1;
              border-width: 3px;
            }

            .flame-animation {
              animation: flame-animation 3s infinite ease-in-out;
            }

            .animate-arrow-move {
              animation: arrow-move 3s infinite ease-in-out;
            }

            .text-shadow {
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.10), 0 0 10px rgba(233, 0, 255, 1);
            }
          `}</style>

        </div>
      </div>
    </section>
  );
}
