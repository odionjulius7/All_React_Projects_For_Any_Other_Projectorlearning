import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // pagination is passed the value(data) we got from the API
    // get from the data, objects and put some certain no: in a an araay to form arrays of array
    setData(paginate(data)) //and gives number of items that should be displayed per page 
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
