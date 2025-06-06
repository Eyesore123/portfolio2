import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PrintAdShowcase() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-row justify-center items-center !mt-10 !mb-10 xl:!mb-0 xl:!pb-0 xl:!mt-0">
      <div className="w-[95%] lg:max-w-[100%] flex flex-col justify-center items-center">
        <h2 className="gradienttext flex flex-row justify-center items-center !mb-14 md:!mb-24 xl:!mb-10 xl:!mt-10">
          {t('showcase.header')}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-12 xl:gap-16 md:!mb-10 xl:!mb-0 xl:scale-80">
          {/* Print Ad Image */}
          <div className="flex flex-col items-center">
            <img
              src="/mainos.jpg"
              alt={t('showcase.printAdAlt')}
              className="rounded-xl shadow-lg !max-w-[250px] md:!min-w-[260px] !md:max-w-[300px] !lg:max-w-[480px] lg:!min-w-[400px]"
              loading="lazy"
            />
          </div>

          {/* Arrow Placeholder */}
          <div className="flex flex-col items-center">
            <span className="!mb-8 !-mt-4 xl:!mr-8 !text-4xl md:!text-7xl text-[#ffc600] !xl:w-40 animate-arrow-sync">
              <span className="block md:hidden">&#8595;</span>
              <span className="hidden md:block">&#8594;</span>
            </span>
          </div>

          {/* Website Image with Glow and White Border */}
          <div className="flex flex-col items-center relative max-w-[260px] min-w-[200px] md:max-w-[260px] lg:!max-w-[280px] w-full">
            <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <span className="block w-full h-full rounded-2xl bg-gradient-to-tr from-[#ffc600] to-[#e900ff] blur-lg animate-glow-sync scale-107"></span>
            </span>
            <img
              src="/pnppower_mobile.png"
              alt={t('showcase.websiteAlt')}
              className="rounded-xl border-4 border-white shadow-lg w-full relative z-10 animate-phone-sync"
              loading="lazy"
              onClick={() => window.open('https://www.pnp-power.fi', '_blank', 'noopener,noreferrer')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}