import React from 'react'
import '../styles/styles.css'
import ShowcaseSection from '../components/ShowcaseSection'
import ProjectCards from '../components/ProjectCards'
import SkillsGrid from '../components/SkillsGrid'
import NowWorking from '../components/NowWorking'
import RecentlyFinished from '../components/RecentlyFinished'
import SkillsFocus from '../components/SkillsFocus'
import BackToTopButton from '../components/BackToTopButton'
import VideoEditing from '../components/VideoEditing'

export default function Projects() {
  return (
    <>
    <ShowcaseSection />
    <ProjectCards />
    <SkillsGrid />
    <NowWorking />
    <RecentlyFinished />
    <SkillsFocus />
    <VideoEditing />
    <BackToTopButton />
    </>
  )
}
