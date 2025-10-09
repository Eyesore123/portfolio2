import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FullWidthVideoFool() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
      // Once metadata is loaded, stop loading
      videoRef.current.onloadeddata = () => setLoading(false);
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
    <section className="w-screen h-90 md:h-[500px] lg:h-[1000px] customheight overflow-hidden relative !mx-0 !px-0">

      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
          <div
            style={{
              width: 50,
              height: 50,
              border: '6px solid transparent',
              borderTop: '6px solid #E900FF',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </div>
      )}

      {/* Background video */}
      <video
        ref={videoRef}
        src="/videos/compressedfool.mp4"
        preload="auto"
        autoPlay
        muted={muted}
        loop
        playsInline
        className="
          absolute -top-20 left-0
          w-full h-auto lg:h-full
          min-h-[350px] 
          object-cover
          opacity-100
        "
      />

      {/* Overlay content */}
      <div
        className="
          relative z-10 !mb-5 md:!mb-0
          !p-6 md:!p-12
          flex flex-col
          justify-center
          items-center lg:items-start
          text-center lg:text-left
        "
      >
        <p className="!text-xs text-gray-400 !mt-2">
          {t("fool.videoCredit")}{" "}
          <a
            href="https://www.youtube.com/shorts/ye19RRf3Sy4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E900FF]"
          >
            {t("fool.videoCreditLinkText")}
          </a>
        </p>

        {/* Controls */}
        <div className="flex !gap-4 !mt-3 md:!mt-4 justify-center lg:justify-start">
          <button
            onClick={togglePlay}
            className="!p-2 md:!p-3 rounded-full bg-white/70 hover:bg-white text-black shadow transition-colors"
            aria-label={playing ? 'Pause Video' : 'Play Video'}
          >
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="!p-2 md:!p-3 rounded-full bg-white/70 hover:bg-white text-black shadow transition-colors"
            aria-label={muted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
}
