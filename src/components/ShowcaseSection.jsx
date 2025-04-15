import React, { useState } from 'react'
import '../styles/styles.css'
import projectData from '../data/projects'

export default function ShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progresses, setProgresses] = useState(
    projectData.map(() => 0)
  )

  const activeProject = projectData[activeIndex]
  const activeProgress = progresses[activeIndex]
  const activePercentage = (activeProgress / activeProject.duration) * 100

  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime
    setProgresses((prev) =>
      prev.map((time, i) =>
        i === activeIndex ? currentTime : time
      )
    )
  }

  return (
    <>
      <section className='flex flex-row justify-center items-center h-[69vh] !mb-30 !mt-8'>
        {/* <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold !mb-30'>
          Projects
        </h2> */}
        <div className='md:w-7/9 flex flex-row gap-34 items-center'>

          <div className="w-full md:w-1/4 flex flex-col gap-18">
            <h2 className="text-yellow-400 text-xl font-semibold mb-2 !text-left">Now Showing</h2>
            {projectData.map((project, index) => (
              <div key={project.name}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg w-40 text-left transition hover:cursor-pointer
                    ${index === activeIndex ? " text-white/60" : "text-white hover:text-white"}
                  `}
                >
                  <span
                    className={`w-3 h-3 rounded-full text-center ${
                      index === activeIndex ? "bg-green-400 animate-pulse" : "bg-gray-500"
                    }`}
                  />
                  <span>{project.name}</span>
                </button>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${(progresses[index] / project.duration) * 100}%`
                    }}
                  />
                </div>
                {/* <div className="projectdescription">
                  <p className='text-left !text-xs !mt-4'>{project.description}</p>
                </div> */}
              </div>
            ))}
          </div>

          {/* Right section for video */}
          <div className='w-full md:w-3/4'>
            <video
              key={`${activeProject.id}-${activeIndex}`}
              src={activeProject.video}
              className='w-full h-full rounded-lg'
              autoPlay
              muted
              playsInline
              style={{ scale: "1" }}
              onEnded={() => {
                const nextIndex = (activeIndex + 1) % projectData.length
                setActiveIndex(nextIndex)
              }}
              onTimeUpdate={handleTimeUpdate}
            />
          </div>

        </div>
      </section>
    </>
  )
}
