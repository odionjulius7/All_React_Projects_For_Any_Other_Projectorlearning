import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

// getting random user users from this api and displaying
// it automatical fetch when u click to fetch or use useEffect
const url = 'https://randomuser.me/api/'

// we use a single image from the api as a default img when there is no image to display
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)// person object
  const [value, setValue] = useState('random person')
  const [title, setTitle] = useState('name')

  // getting a single peson object from this API 
  const getPerson = async () => {
    setLoading(true)// always set loading to true
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0] // get the 1st object from the result array
    // multiple destructuring
    const { phone, email } = person // destructuring phone & email from the person object
    const { large: image } = person.picture//destructuring large(i.e img) and rename(givining it an alias) from the person[picture] object 
    const { password } = person.login// destructuring password from the person.login
    const { first, last } = person.name// destructuring fisrt/last name from the person.name
    
    // destructuring a nexted object from person.dob(date of birth)
    const {
      dob: { age },
    } = person

    const {
      street: { number, name },
    } = person.location // more deep destructuring

// rearranging the destructured object items and passing to a variable
    const newPerson = {
      // using es6 syntax that state if the item has same name the pass it direct
      // {image: image} or {image}
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,//using template string to join street number & name to get a whole street
      name: `${first} ${last}`,//using template string to join 1st & last name to get a whole name
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }

  useEffect(() => {
    getPerson()
  }, [])

// handling icon btn value changes
  const handleValue = (e) => {
    // e.target.classList.contains('icon') it's vanila js method of checking class name of any tag
    if (e.target.classList.contains('icon')) {
      // getting data-label='name' value(i.e name or email) just like name="name" in input
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name' // like naming a btn or a tag 
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
