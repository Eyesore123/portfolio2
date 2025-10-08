import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { useTranslation } from 'react-i18next';

export default function VideoEditing() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoadVideo = () => {
    setLoading(true);
    setProgress(0);

    // Fake loading progress for smooth UX
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVideoLoaded(true);
            setLoading(false);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <section className="flex flex-row justify-center items-center !pt-0 !mt-0">
      <div className="!mt-10 !pb-20 !mb-20 !pl-6 !pr-6 flex flex-col justify-center items-center text-center w-full">

        <h2 className="gradienttext text-2xl !mb-4">{t('videoediting.header') || 'Video Editing'}</h2>
        <p className="text-[var(--text-color)] text-base !mb-12 italic">
          {t('videoediting.subheader')}
        </p>

        <div className="relative bg-[var(--transparent)] border border-bg-gradient-to-r from-[#5800ff] to-[#e900ff] rounded-2xl !p-6 shadow-[0_0_20px_rgba(233,0,255,0.3)] w-full backdrop-blur-sm animate-border-glitch max-w-xl">
          {!videoLoaded && !loading && (
            <button
              onClick={handleLoadVideo}
              className="!px-6 !py-3 bg-gradient-to-r from-[#5800ff] to-[#e900ff] text-white rounded-xl shadow-lg hover:cursor-pointer hover:opacity-90 transition-all"
            >
              🎬 Load Video
            </button>
          )}

          {loading && (
            <div className="w-full !mt-6">
              <div className="w-full bg-gray-800 rounded-full !h-4 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-[#5800ff] to-[#e900ff] !h-4 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-[var(--text-color2)] !mt-2">{progress}%</p>
            </div>
          )}

          {videoLoaded && (
            <video
              className="rounded-2xl w-full shadow-lg"
              controls
              preload="auto"
              onLoadedData={(e) => (e.target.volume = 0.05)}
            >
              <source src="/pnp-power.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <style>{`
          @keyframes border-glitch {
            0% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
            25% { border-image-source: linear-gradient(135deg, #5800ff, #e900ff); }
            50% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
            75% { border-image-source: linear-gradient(135deg, #5800ff, #e900ff); }
            100% { border-image-source: linear-gradient(45deg, #5800ff, #e900ff); }
          }

          .animate-border-glitch {
            animation: border-glitch 2s infinite ease-in-out;
            border-image-slice: 1;
            border-width: 3px;
          }
        `}</style>
      </div>
    </section>
  );
}
