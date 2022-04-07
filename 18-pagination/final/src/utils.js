
// we need create arrays for each pages to display out of the total number of items in the  array
const paginate = (followers) => {
  // followers is that data that was fetched and passed to our pagination() as
  // parameter in useFetch custom hook

  // items we want per page from the lenght of items in our followers arrays
  // that means if we want 10 items per page at of 100 items in the total array
  const itemsPerPage = 10 

  // to round it up incase we are given a float(11.11) figure
  // NOTE: if we have 100 items and we want 9 items per page the total number page we
  // get will be 11.1111 pages, so to get a round figure page that include every it to the last item
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

// Array.from() help create a new arrays of array 
// and take two options which are the lenght of the new array u want
// the items/array to loop through and get each item for that lenght
  const newFollowers = Array.from({ length: numberOfPages }, (_, index ) => { 
    // 1staugument is lenght of the array , second is a callback func with the 1st argument(is undefined)
    //second is index which is what we need 

    // we need our starting point of each items per page
    // NOTE: at every loop the index is from 0, 1, 2, 3, 4, 5  etc to the end of length: numberOfPages
    const start = index * itemsPerPage

    // we slice the start and then the end of the each page items
    // NOTE: at every loop the index is from 0, 1, 2, 3, 4, 5  etc to the end of length: numberOfPages
    // so the first loop gives the 1st page[array] slice(0, 10), second slice(10, 20) 
    // u now slice(start, end) end minus the start will give the number of items to slice out
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
