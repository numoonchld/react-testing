import React from 'react'

const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type="text" id="name" placeholder='full name' />
        </div>
        <div>
          <label htmlFor='bio'>Bio
            <textarea id='bio' name='bio' />
          </label>
        </div>
        <div>
          <label htmlFor='job-location'>Job Location</label>
          <select id='job-location'>
            <option value="">Select a country</option>
            <option value="">Unites Statess</option>
            <option value="">United Kingdom</option>
            <option value="">Canada</option>
            <option value="">India</option>
            <option value="">Australia</option>
          </select>
        </div>
        <div>
          <label> <input type="checkbox" id="terms" />I agree to the terms and conditions</label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Application