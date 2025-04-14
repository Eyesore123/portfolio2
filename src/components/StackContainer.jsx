import React from 'react';

export default function StackContainer() {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack-icon">
        <img src="/php-original.svg" alt="php" />
      </div>
      <div className="tech-stack-icon">
        <img src="/astro-plain-wordmark.svg" style={{filter: 'invert(1)'}} alt="Astro" />
      </div>
      <div className="tech-stack-icon">
        <img src="/wordpress-plain-wordmark.svg" style={{filter: 'invert(1)'}} alt="Wordpress" />
      </div>
      <div className="tech-stack-icon">
        <img src="/react-original.svg" alt="React" />
      </div>
      <div className="tech-stack-icon">
        <img src="/javascript-original.svg" alt="JavaScript" />
      </div>
      <div className="tech-stack-icon">
        <img src="typescript-original.svg" alt="TypeScript" />
      </div>
      <div className="tech-stack-icon">
        <img src="/nodejs-original-wordmark.svg" alt="Node.js" />
      </div>
      <div className="tech-stack-icon">
        <img src="/nextjs-original.svg" alt="NextJS" />
      </div>
      <div className="tech-stack-icon">
        <img src="/tailwindcss-original.svg" alt="TailwindCSS" />
      </div>
      <div className="tech-stack-icon">
        <img src="/firebase-original.svg" alt="Firebase" />
      </div>
      <div className="tech-stack-icon">
        <img src="/supabase-plain-wordmark.svg" style={{filter: 'invert(1)'}} alt="Supabase" />
      </div>
      <div className="tech-stack-icon">
      <img src="/git.svg" alt="GitHub" />
      </div>
    </div>
  );
}