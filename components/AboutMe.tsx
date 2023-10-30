import Image from 'next/image'
import React from 'react'
import data from 'utils/data'

const AboutMe = () => {
  return (
    <fieldset className="flex flex-col sm:flex-row gap-4" id='about'>
      <legend>About Me</legend>
      <div className="sm:min-w-[250px]">
        <div className="w-full md:w-[250px] border border-black">
          <Image
            src={data.photoUrl}
            layout="responsive"
            width={'100%'}
            height="100%"
            alt='photo profile'
          />
        </div>
        <div className="flex flex-col gap-2 w-fit">
          <div>
            <h1 className="text-3xl text-gray-800">{data.name}</h1>
            <p className="text-xl">{data.job}</p>
          </div>
          <a href={data.cvUrl} download className="button w-fit text-inherit">
            Download CV
          </a>
        </div>
      </div>
      <p>{data.about}</p>
    </fieldset>
  )
}

export default AboutMe
