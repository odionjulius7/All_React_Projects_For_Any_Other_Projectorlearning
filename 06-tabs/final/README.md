# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect 

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a _redirects file in the public folder and insert this into it 
 /*    /index.html   200 
## exactly /*    /index.html   200 into the _redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github 

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly 




<!-- #### IN ACTION   --> <App />

[Portfolio](https://gatsby-strapi-portfolio-project.netlify.app/)

<!-- // when fetching a data frm an API and you u're using conditional rendering in react hook
  // alway destructure ur items immediately above the if statement that needs the value, just like dis
  const { company, dates, duties, title } = jobs[value]; -->

<!-- const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []); -->

<!-- <div className="btn-container">
          {jobs.map((item, index) => {
            // we need the index here as well to get index position of the items
            // cos if we use the item.id will give string,number or sometin that will match position
            // rendering ofthe items[value] position
            // (i.e index position of zero will give us the 1st and so on)
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div> -->
