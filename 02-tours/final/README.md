## on the video from youtube (code 15 react project-complete course)

## React Projects Starter tour data fetching APP

## in <Tour /> component we are taught on how to shorten the number of character/words

# to show at first before toggling btwn full or cut out characters

 <p> { 
  // since we just want to show fewer chararter in our info &{info}
   // and the value of &{info} is string we use the substring() method to cut
    // out the few/limited data needed to be shown at first
    // starting from zero cut 200 characters and show it.
    
    readMore ? info : `${info.substring(0, 200)}...` 
    }

## if the readMore is true that means the full info value will display and the show less button will show to toggle it

<button onClick={() => setReadMore(!readMore)}>
{readMore ? "show less" : " read more"}
</button>

 </p>
