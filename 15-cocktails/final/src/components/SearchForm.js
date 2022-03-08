import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {

// Uncontrolled Form

  const { setSearchTerm } = useGlobalContext() // uncontrol form don't need the search term only to set it
  const searchValue = React.useRef('')

  React.useEffect(() => {
    //everytime we enter the home page the cursor 
    // should focus(i.e the typing cursor should highlight the serach bar)
    searchValue.current.focus() 
  }, [])

  function searchCocktail() {
    // pass the value of ref={searchValue} to searchTerm 
    // NOTE: uncontrolled form
    setSearchTerm(searchValue.current.value) 
  }
  function handleSubmit(e) {
    e.preventDefault() // to prevent automatic page reloading when the user press enter key 
    // even without searching any thing in search bar 
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
