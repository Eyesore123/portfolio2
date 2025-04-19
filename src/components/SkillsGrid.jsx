import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 60 },
  { name: 'React', level: 80 },
  { name: 'Next.js', level: 70 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Node.js', level: 60 },
  { name: 'Firebase', level: 65 },
  { name: 'WordPress', level: 75 },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 !-mt-20 md:!mt-14 !pb-50 gap-8 scale-75 md:scale-90">
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
            <p className="text-right text-sm text-white/60 mt-1">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  )
}
