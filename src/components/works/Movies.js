import React from 'react'
import imgMoviesRespong from '../../assests/img/sliderPorfolio/moviesRespon.png'

const Movies = () => {
  return (
    <div>
        <div className='divProyects moviesReact'>
          <div className='divInfo divInfoMovies'>
              <div>
                  <h1>Movies React</h1>
                  <h2>Looking your Movie</h2>
              </div>
              <p>This API was built with React js. The functionality of this website is to search for movies of any type and industry, by typing the name or part of the name. The movies are sourced from a server, in addition to the details and description of each movie. The API has its own styles in CSS</p>
              <button>Visit the Site</button>
          </div>
          <div className='divVideo'>

              <video 
              src={""}
              className='videoWorks'
              
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
              ></video>

              <img src={imgMoviesRespong} alt='movies'/>
  
          </div>
        </div>
    </div>
  )
}

export default Movies