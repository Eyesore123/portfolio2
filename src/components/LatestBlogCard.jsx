import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function LatestBlogCard() {

  const { t } = useTranslation();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://yourblogapi.com/api/latest')
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className='flex flex-row justify-center items-center'>
      <div className='!mt-10 !pb-22 !pl-6 !pr-6 w-[60%] lg:max-w-[60%] flex flex-col justify-center items-center text-center'>

        <h2 className='gradienttext text-2xl mb-4'>{t("latestblog.header")}</h2>

        {post && (
          <a href={post.url} target='_blank' rel='noopener noreferrer' className='bg-gray-900 text-white p-4 rounded-xl shadow-lg w-full max-w-md hover:bg-gray-800 transition-colors'>
            <p className='text-lg mb-2 font-semibold'>{post.title}</p>
            <p className='text-sm text-gray-300'>{post.excerpt}</p>
            <p className='text-xs text-gray-500 mt-2 italic'>{t("latestblog.published")} {post.publishedAt}</p>
          </a>
        )}

        {!post && <p className='text-gray-500 text-sm italic'>{t("latestblog.loading")}</p>}

      </div>
    </section>
  )
}
