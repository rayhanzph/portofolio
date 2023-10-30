import React from 'react'
import data from 'utils/data'

const Skills = () => {
  return (
    <fieldset id='skill'>
      <legend>Skills</legend>
      <ul className='list-disc pl-4'>
        {data.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </fieldset>
  )
}

export default Skills
