import React from 'react'
import data from 'utils/data'

const Experience = () => {
  return (
    <fieldset id='experience'>
      <legend>Experiences</legend>
      <ul className="list-disc pl-4">
        {data.experiences.map((experience) => (
          <li key={experience.rangeTime}>
            {experience.rangeTime} 
            <h2 className='text-xl font-semibold text-gray-900'>{experience.job}</h2>
            <p className='text-lg'>{experience.company}</p>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default Experience
