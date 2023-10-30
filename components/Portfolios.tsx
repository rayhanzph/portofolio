import Image from 'next/image'
import React, { Fragment } from 'react'
import data from 'utils/data'

const Portfolios = () => {
  return (
    <fieldset>
      <legend>Projects</legend>
      <div className="flex flex-col gap-4">
        {data.projects.map((project) => (
          <fieldset
            className="flex flex-col sm:flex-row gap-4"
            key={project.description}
          >
            <div className="flex flex-col gap-2">
              <div className="w-full sm:w-[250px]">
                <Image
                  src={project.thumbnail}
                  width="100%"
                  height="49%"
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                  alt='project preview'
                />
              </div>
              {project.demo === undefined && project.repo === undefined ? (
                ''
              ) : (
                <div className="flex justify-center gap-2">
                  {project.demo ? (
                    <a href={project.demo} className="">
                      Visit Project
                    </a>
                  ) : (
                    ''
                  )}
                  {project.repo ? (
                    <a href={project.repo} className="">
                      Visit Repository
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              )}
            </div>

            <div className="">
              <h2 className="text-2xl">{project.name}</h2>
              <p>Tech : {project.techs.map((tech) => tech).join(', ')}</p>
              <p>{project.description}</p>
            </div>
          </fieldset>
        ))}
      </div>
    </fieldset>
  )
}

export default Portfolios
