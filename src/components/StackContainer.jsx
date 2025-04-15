import React from 'react';
import '../styles/styles.css';

export default function StackContainer() {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack-icon">
        <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/php-original.svg" alt="php" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://docs.astro.build/en/concepts/why-astro/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/astro-plain-wordmark.svg" style={{ filter: 'invert(1)' }} alt="Astro" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://wordpress.org/about/features/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/wordpress-plain-wordmark.svg" style={{ filter: 'invert(1)' }} alt="Wordpress" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/react-original.svg" alt="React" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/javascript-original.svg" alt="JavaScript" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="typescript-original.svg" alt="TypeScript" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://nodejs.org/en/about" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/nodejs-original-wordmark.svg" alt="Node.js" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/nextjs-original.svg" alt="NextJS" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/tailwindcss-original.svg" alt="TailwindCSS" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/firebase-original.svg" alt="Firebase" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/supabase-plain-wordmark.svg" style={{ filter: 'invert(1)' }} alt="Supabase" />
        </a>
      </div>
      <div className="tech-stack-icon">
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <img src="/git.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}
