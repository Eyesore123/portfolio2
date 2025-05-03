import React from 'react'
import '../styles/styles.css'
import ShowcaseSection from '../components/ShowcaseSection'
import ProjectCards from '../components/ProjectCards'
import SkillsGrid from '../components/SkillsGrid'
import NowWorking from '../components/NowWorking'
import NowWorkingOn from '../components/NowWorkingOn'
import SkillsFocus from '../components/SkillsFocus'

export default function Projects() {
  return (
    <>
    <ShowcaseSection />
    <ProjectCards />
    <SkillsGrid />
    <NowWorking />
    <NowWorkingOn />
    <SkillsFocus />
    </>
  )
}
