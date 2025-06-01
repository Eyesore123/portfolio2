import React, { useEffect, useRef, useState, memo, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'JavaScript', level: 85, descriptionKey: 'skills.javascript.description' },
  { name: 'TypeScript', level: 60, descriptionKey: 'skills.typescript.description' },
  { name: 'React', level: 80, descriptionKey: 'skills.react.description' },
  { name: 'Next.js', level: 70, descriptionKey: 'skills.nextjs.description' },
  { name: 'Tailwind CSS', level: 80, descriptionKey: 'skills.tailwindcss.description' },
  { name: 'Node.js', level: 65, descriptionKey: 'skills.nodejs.description' },
  { name: 'Firebase', level: 70, descriptionKey: 'skills.firebase.description' },
  { name: 'WordPress', level: 75, descriptionKey: 'skills.wordpress.description' },
  { name: 'Git', level: 70, descriptionKey: 'skills.git.description' },
  { name: 'Python', level: 45, descriptionKey: 'skills.python.description' },
  { name: 'Angular', level: 35, descriptionKey: 'skills.angular.description' },
  { name: 'PostgreSQL', level: 40, descriptionKey: 'skills.postgresql.description' },
];

// Helper hook to detect if screen is mobile or desktop for animation variants
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

const SkillCard = memo(({ skill, inView, t, refCb }) => {
  const isMobile = useIsMobile();

  // Animation variants for fade + slide from below
  const variants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={refCb}
      data-skill={skill.name}
      className="backdrop-blur !p-6 frontbanner2 shadow-lg"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h3 className="gradienttext font-semibold mb-2">{skill.name}</h3>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full p-[2px] bg-gradient-to-r from-[#5800ff] to-[#e900ff]"
          initial={false}
          animate={{ width: inView ? `${skill.level}%` : '0%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ willChange: 'width' }}
        />
      </div>
      <div className="flex justify-between items-center mt-1">
        {skill.descriptionKey && (
          <small className="text-sm text-white/60 !mt-3 !mr-4">
            {t(skill.descriptionKey)}
          </small>
        )}
        <p className="text-right text-sm text-white/60 ml-auto">{skill.level}%</p>
      </div>
    </motion.div>
  );
});

export default function SkillsGrid() {
  const [inViewSkills, setInViewSkills] = useState({});
  const skillRefs = useRef({});
  const { t } = useTranslation();

  const observer = useRef(null);

  const observeSkills = useCallback(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const updates = {};
        for (const entry of entries) {
          const skillName = entry.target.dataset.skill;
          if (entry.isIntersecting && !inViewSkills[skillName]) {
            updates[skillName] = true;
          }
        }
        if (Object.keys(updates).length) {
          setInViewSkills((prev) => ({ ...prev, ...updates }));
        }
      },
      { threshold: 0.4, rootMargin: '0px 0px -100px 0px' }
    );

    Object.values(skillRefs.current).forEach((el) => {
      if (el) observer.current.observe(el);
    });
  }, [inViewSkills]);

  useEffect(() => {
    observeSkills();
    return () => observer.current?.disconnect();
  }, [observeSkills]);

  return (
    <section className="!mt-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center !-mb-40 md:!mb-0 !pl-10 !pr-10 md:!p-2 orange">
        {t('projects.skillsheader')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 !-mt-38 !-mb-50 md:!mt-14 !md:mb-30 gap-8 scale-75 md:scale-90">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            inView={!!inViewSkills[skill.name]}
            t={t}
            refCb={(el) => (skillRefs.current[skill.name] = el)}
          />
        ))}
      </div>
    </section>
  );
}
