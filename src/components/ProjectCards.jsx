import React from "react";
import { useState } from "react";
import projectData from "../data/projects";

export default function ProjectCards() {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const handleImageClick = (event) => {
    const image = event.target;
    if (isImageFullscreen) {
      document.exitFullscreen();
    } else {
      image.requestFullscreen();
    }
    setIsImageFullscreen(!isImageFullscreen);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 px-4 !mt-20 !md:mt-0 py-10 md:!mx-20 lg:!mx-50">
        {projectData.map((project) => (
          <div key={project.name} className="p-[1px] rounded-xl bg-gradient-to-r from-[#5800ff] to-[#e900ff] w-100 md:max-w-140">
            <div className="bg-white/5 backdrop-blur rounded-xl p-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover rounded mb-4 !h-80 !p-4 hover:cursor-pointer"
                onClick={(event) => handleImageClick(event)}
              />
              <div className="!pl-4">
                <h4 className="text-xl font-semibold !mb-4 !mt-2">{project.name}</h4>
                <p className="text-white/80 mb-4 !mr-4 h-auto min-h-36">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack?.map((tech) => (
                    <img
                      key={tech.label}
                      src={tech.icon}
                      alt={tech.name}
                      className="w-auto h-16 !mt-6 !mb-6"
                      title={tech.name}
                      onClick={(event) => handleImageClick(event)}
                    />
                  ))}
                </div>
                <div className="flex gap-4 !pb-4">
                  <a
                    href={project.liveLink}
                    className="!px-4 !py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-black rounded font-semibold hover:opacity-90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    className="!px-4 !py-2 bg-white/10 text-white rounded hover:opacity-90 border border-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}