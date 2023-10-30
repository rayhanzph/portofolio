import React from 'react'
import data from 'utils/data'

const Education = () => {
  return (
    <fieldset id='education'>
      <legend>Education</legend>
      <ul className="list-disc pl-4">
        {data.education.map((education) => (
          <li key={education.education}>
            {education.rangeTime} 
            <h2 className='text-xl font-semibold text-gray-900'>{education.experience}</h2>
            {/* <p className='text-lg'>{experience.company}</p> */}
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default Education
