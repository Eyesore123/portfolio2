import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import WebsiteAnalyzer from './WebsiteAnalyzer';
import { useTranslation } from 'react-i18next';

export default function LatestBlogCard() {
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fallbackPost = {
    title: "Welcome to my blog!",
    excerpt: "Check out my latest thoughts and tutorials on web development.",
    url: "https://blog-app-production-16c2.up.railway.app/",
    imageUrl: "/fallbackimage.jpg" // Fallback image
  };

  useEffect(() => {
    fetch('https://blog-app-production-16c2.up.railway.app/api/latest-post')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then(data => {
        setPost(data);
        setError(false);
      })
      .catch(err => {
        console.error('Failed to fetch blog post:', err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const displayPost = post || (error ? fallbackPost : null);

  return (
    <section className="flex justify-center items-start md:items-center w-full !px-4 lg:!px-12 !py-12">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        
        {/* Blog Post */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className='gradienttext text-2xl !mb-4'>{t("latestblog.header")}</h2>
          <p className='text-xs !mt-3 !mb-8 font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80'>
            {t("latestblog.linktext")}
          </p>

          {/* Image with gradient border and spinner */}
          {displayPost && (
            <div
              className='!mt-4 relative flex items-center justify-center'
              style={{
                width: 154,
                height: 154,
              }}
            >
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #ffc600, #e900ff)',
                  zIndex: 1,
                }}
              />
              {/* White inner background for border effect */}
              <div
                className="absolute"
                style={{
                  top: 2,
                  left: 2,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: 'black',
                  zIndex: 2,
                }}
              />
              {/* Spinner */}
              {!imageLoaded && (
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    top: 0,
                    left: 0,
                    width: 154,
                    height: 154,
                    borderRadius: '50%',
                    zIndex: 3,
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    border: '6px solid transparent',
                    borderTop: '6px solid',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    borderImage: 'linear-gradient(45deg, #5800ff, #e900ff) 1'
                  }} />
                  <style>
                    {`
                      @keyframes spin {
                        0% { transform: rotate(0deg);}
                        100% { transform: rotate(360deg);}
                      }
                    `}
                  </style>
                </div>
              )}
              {/* Image */}
              <a
                href={displayPost.url}
                target='_blank'
                rel="noopener noreferrer"
                className="absolute"
                style={{
                  top: 2,
                  left: 2,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  zIndex: 4,
                  display: imageLoaded ? 'block' : 'none'
                }}
              >
                <img
                  src={displayPost.imageUrl || "/fallbackimage.jpg"}
                  alt="Blog post thumbnail"
                  width={150}
                  height={150}
                  className='object-cover w-[150px] h-[150px] rounded-full hover:cursor-pointer'
                  onError={(e) => {
                    e.target.src = "/fallbackimage.jpg";
                  }}
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </a>
              {/* Preload image for onLoad event if not loaded */}
              {!imageLoaded && (
                <img
                  src={displayPost.imageUrl || "/fallbackimage.jpg"}
                  alt="Blog post thumbnail"
                  width={150}
                  height={150}
                  style={{ display: 'none' }}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.src = "/fallbackimage.jpg";
                  }}
                />
              )}
            </div>
          )}

          {loading && (
            <p className='text-gray-500 text-sm italic !mt-4'>{t("latestblog.loading")}</p>
          )}

          {displayPost && !loading && (
            <div className='flex flex-col items-center !mt-10'>
              <a
                href={displayPost.url}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-900 text-white !p-6 rounded-xl shadow-lg max-w-md hover:bg-gray-800 transition-colors cursor-pointer'
              >
                <p className='text-lg font-semibold !mb-4'>{displayPost.title}</p>
                <p className='text-sm text-gray-300'>{displayPost.excerpt}</p>
              </a>
            </div>
          )}

          {error && (
            <p className='text-xs text-yellow-400 !mt-3'>(Showing fallback content)</p>
          )}
        </div>

        {/* Analyzer Section */}
        <div className="flex-1 !mt-10 lg:!mt-0">
          <WebsiteAnalyzer />
        </div>

      </div>
    </section>
  );
}