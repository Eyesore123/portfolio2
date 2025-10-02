import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FullWidthVideoOffer() {
  const { t } = useTranslation();
  const contactUrl = "/contact";
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  // set base volume once after mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <section className="w-full relative lg:!h-[500px] !mt-10 !mb-16 overflow-hidden shadow-lg">
      {/* Background video */}
      <video
        ref={videoRef}
        src="/videos/Heroedit.mp4"
        preload="none"
        autoPlay
        muted={muted}
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay content */}
      <div className="relative z-10 !p-6 md:!p-12 flex flex-col justify-center items-start lg:!ml-100">
        <h3 className="text-3xl md:text-4xl font-semibold !mb-4 text-[#E900FF] underline">
          {t("offer.specialOffer")}
        </h3>
        <p className="text-sm md:text-base !mb-6 opacity-90 max-w-2xl">
          {t("offer.description")}
          <a
            href={contactUrl}
            className="text-[#E900FF] hover:text-[#5800FF] !ml-1"
          >
            {t("offer.contactLink")}
          </a>
          {t("offer.contactText")}
        </p>

        {/* Stylish reference to video edit */}
        <p className="text-xs text-gray-400 mt-2">
          {t("offer.videoCredit")}{" "}
          <a
            href="https://www.youtube.com/watch?v=isR9_NveQqU"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E900FF]"
          >
            {t("offer.videoCreditLinkText")}
          </a>
        </p>

        {/* Controls */}
        <div className="flex !gap-4 !mt-4">
          <button
            onClick={togglePlay}
            className="!p-3 rounded-full bg-white/70 hover:bg-white text-black shadow transition-colors"
            aria-label={playing ? 'Pause Video' : 'Play Video'}
          >
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="!p-3 rounded-full bg-white/70 hover:bg-white text-black shadow transition-colors"
            aria-label={muted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
}
