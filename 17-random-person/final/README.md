
# // getting random user users from this api and displaying
# // it automatical fetch when u click to fetch or use useEffect
<!-- const url = 'https://randomuser.me/api/' -->

# // we use a single image from the api as a default img when there is no image to display
<!-- const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg' -->


# // multiple destructuring
# // getting a single peson object from this an API 
# // destructuring a nexted object from person.dob(date of birth)

 # // rearranging the destructured object items and passing to a variable
 # // using es6 syntax that state if the item has same name the pass it directly // {image: image} or {image}
 # {street: `${number} ${name}`}, <!-- //using template string to join street number & name to get a whole street -->

<!-- // handling icon btn value changes
  const handleValue = (e) => {
    // e.target.classList.contains('icon') it's vanila js method of checking class name of any tag
    if (e.target.classList.contains('icon')) {
      // getting data-label='name' value(i.e name or email) just like name="name" in input
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  } -->