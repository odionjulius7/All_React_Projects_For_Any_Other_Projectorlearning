import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)

  // we input a letter "a" (could be any letter) for an initial fetching before
  // we input something in our seacrh bar to fetch new coctails
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

// when there is an issue/conplain in the console that react useEffect() is missing a dependency(array)
// always use useCallback() hook to resolve the issue
// i.e only if the searchTerm changes that when to create/run the fetchDrink from scratch
// and if it doesn't then don't created from scratch : that will resolve the issue 
  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data);
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          // destructure each details from item
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          // we need to return the renamed destructured info from each drinks(item)
          // that matches the search
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          } // we destructured it to give cocktails array[{},{}] individual object(key value pair)
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])// note: if you put the fetchDrink dependency array to useEffect with the useCallback, an infinite fetching error will occur
  // when searchTerm value changes you fetch cocktails
 // and then fetchDrink can become a depency array to useEffect cos of the useCallback

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
