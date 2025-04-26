import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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
  { name: 'Python', level: 30, descriptionKey: 'skills.python.description' },
]

export default function SkillsGrid() {
  // Tracking state of each skill
  const [inViewSkills, setInViewSkills] = useState({})

  // Refs to each skill
  const skillRefs = useRef({})

  const { t } = useTranslation();

  useEffect(() => {
    // IntersectionObserver setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewSkills((prev) => ({
              ...prev,
              [entry.target.dataset.skill]: true,
            }))
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of the skill element is in view
        rootMargin: '0px 0px -200px 0px', // Trigger a bit earlier, 200px before the element is fully in view
      }
    )
    // Observe each skill
    Object.values(skillRefs.current).forEach((ref) => {
      observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="!mt-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center !-mb-10 md:!mb-0 !pl-10 !pr-10 md:!p-2 orange">{t("projects.skillsheader")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 !-mt-38 !-mb-50 md:!mt-14 !md:mb-30 gap-8 scale-75 md:scale-90">
        {skills.map((skill) => (
          <div
            key={skill.name}
            data-skill={skill.name}
            ref={(el) => (skillRefs.current[skill.name] = el)}
            className="backdrop-blur !p-6 frontbanner2 shadow-lg"
          >
            <h3 className="gradienttext font-semibold mb-2">{skill.name}</h3>
            <div className="w-full h-3 bg-white/10 rounded-full">
              {/* Animated progress bar */}
              <motion.div
                className="h-full p-[2px] bg-gradient-to-r from-[#5800ff] to-[#e900ff]"
                initial={{ width: 0 }}
                animate={
                  inViewSkills[skill.name] ? { width: `${skill.level}%` } : { width: 0 }
                }
                transition={{ duration: 1 }}
              />
            </div>
            <div className="flex justify-between items-center mt-1">
            {/* Description */}
              {skill.descriptionKey && (
                <small className="text-sm text-white/60 !mt-3 !mr-4">{t(skill.descriptionKey)}</small>
              )}
              <p className="text-right text-sm text-white/60 ml-auto">{skill.level}%</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
