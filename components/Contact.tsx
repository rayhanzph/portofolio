import React, { useCallback, useEffect, useState } from 'react'
import data from 'utils/data'

const Contact = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [subjectErrorMessage, setSubjectErrorMessage] = useState('')
  const [messageErrorMessage, setMessageErrorMessage] = useState('')
  const validateForm = useCallback(() => {
    setSubjectErrorMessage('')
    setMessageErrorMessage('')
    if (!subject) setSubjectErrorMessage('Please fill subject field')
    if (!message) setMessageErrorMessage('Please fill message field')
  }, [message, subject])
  useEffect(() => validateForm(), [message, subject, validateForm])
  return (
    <fieldset className="flex flex-col gap-4 sm:gap-6 sm:flex-row" id='contact'>
      <legend>Contact</legend>
      <div className="flex flex-col gap-1 sm:basis-8/12">
        <label htmlFor="subject-field">Subject</label>
        <input
          type="text"
          placeholder="Enter Subject"
          id="subject-field"
          onChange={(e) => setSubject(e.target.value.trimStart())}
          value={subject}
        />
        {!subjectErrorMessage ? (
          ''
        ) : (
          <p className="text-red-500 text-base">{subjectErrorMessage}</p>
        )}
        <label htmlFor="message-field">Message</label>
        <textarea
          name=""
          id="message-field"
          placeholder="Enter Message"
          rows={4}
          className="py-2"
          onChange={(e) => setMessage(e.target.value.trimStart())}
          value={message}
        ></textarea>
        {!messageErrorMessage ? (
          ''
        ) : (
          <p className="text-red-500 text-base">{messageErrorMessage}</p>
        )}
        <a
          href={`mailto:${data.email}?subject=${subject}&body=${message}`}
          className="button text-inherit w-fit mt-2"
          onClick={(e) => {
            if (!subject || !message) {
              validateForm()
              e.preventDefault()
            }
          }}
        >
          Send Email
        </a>
      </div>
      <div className="flex-grow flex flex-col gap-2">
        <h3 className="text-xl">Get In Touch</h3>
        <ul className="flex flex-col gap-1 list-disc pl-4">
          {data.socialMedias.map((socialMedia) => (
            <li key={socialMedia.name}>
              <a href={socialMedia.link} target="_blank" rel="noreferrer">
                {socialMedia.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </fieldset>
  )
}

export default Contact
