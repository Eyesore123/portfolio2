import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function LatestBlogCard() {
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const fallbackPost = {
    title: "Welcome to my blog!",
    excerpt: "Check out my latest thoughts and tutorials on web development.",
    url: "https://your-blog-url.com", // Replace with your actual blog URL
    publishedAt: new Date().toLocaleDateString()
  };

  useEffect(() => {
    fetch('https://blog-app-production-16c2.up.railway.app/latest-post')
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

  // Determine which post to display
  const displayPost = post || (error ? fallbackPost : null);

  return (
    <section className='flex flex-row justify-center items-center'>
      <div className='!mt-10 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-col justify-center items-center text-center'>
        
        <h2 className='gradienttext text-2xl !mb-4'>{t("latestblog.header")}</h2>
        
        {loading && (
          <p className='text-gray-500 text-sm italic'>{t("latestblog.loading")}</p>
        )}
        
        {displayPost && !loading && (
          <a 
            href={displayPost.url} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='bg-gray-900 text-white !p-4 rounded-xl shadow-lg w-full max-w-md hover:bg-gray-800 transition-colors'
          >
            <p className='text-lg !mb-2 font-semibold'>{displayPost.title}</p>
            <p className='text-sm text-gray-300'>{displayPost.excerpt}</p>
            <p className='text-xs text-gray-500 !mt-2 italic'>
              {t("latestblog.published")} {displayPost.publishedAt}
            </p>
            {error && (
              <p className='text-xs text-yellow-400 !mt-1'>
                (Showing fallback content)
              </p>
            )}
          </a>
        )}
        
      </div>
    </section>
  )
}
