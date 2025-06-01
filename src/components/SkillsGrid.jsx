import React, { memo } from 'react';
import { motion } from 'framer-motion';
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

// Memoized SkillCard
const SkillCard = memo(({ skill, t }) => {
  return (
    <motion.div
      className="backdrop-blur !p-6 frontbanner2 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="gradienttext font-semibold mb-2">{skill.name}</h3>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full p-[2px] bg-gradient-to-r from-[#5800ff] to-[#e900ff]"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
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
  const { t } = useTranslation();

  return (
    <motion.section
      className="!mt-20 px-8 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-center !-mb-40 md:!mb-0 !pl-10 !pr-10 md:!p-2 orange">
        {t('projects.skillsheader')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 !-mt-38 !-mb-50 md:!mt-14 !md:mb-30 gap-8 scale-75 md:scale-90">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} t={t} />
        ))}
      </div>
    </motion.section>
  );
}
