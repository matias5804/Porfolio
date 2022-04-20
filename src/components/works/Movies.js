import React from 'react'
import imgMoviesRespong from '../../assests/img/sliderPorfolio/moviesRespon.png'
import videoMovies from '../../assests/movies/movies.mp4'

const Movies = () => {
  return (
    <div id='movies'> 
      <div className='divProyects moviesReact'>
        <div className='divInfo divInfoMovies'>
          <div>
            <h1>Movies React</h1>
            <h2>Search for movies</h2>
          </div>

          <p>This API was built with React js. The functionality of this website is to search for movies of any type and industry, by typing the name or part of the name. The movies are sourced from a server, in addition to the details and description of each movie. The API has its own styles in CSS</p>

          <div className='btnsWorks'>
            <a href='https://matias5804.github.io/MoviesReact/' target="_blank" rel='noreferrer'>
              <button>Visit the Site</button>
            </a> 
            <a href='https://github.com/matias5804/MoviesReact.git' target="_blank" rel='noreferrer'>
              <button>See GitHub</button>
            </a>
          </div>
        </div>

        <div className='divVideo'>
          <video 
          src={videoMovies}
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