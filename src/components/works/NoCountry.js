import React from 'react'

const NoCountry = () => {
  return (
<div id='pokemon'>
      <div className='divProyects proyectPoke'>
        <div className='divInfo divInfoPoke'>
          <div>
            <h1>Pokemon</h1>
            <h2>Personal Pokedex</h2>
          </div>

          <p>This is the Poke Api I developed in React, with CSS styles and responsive design for Mobile, Tablet and PC. All the information comes directly from the official pokeApi page, which can be filtered and sorted according to the user's wishes in my Api. The pokeApi contains a Pokémon search engine. Favorites can be selected, and it also has pagination.</p>
          
          <div className='btnsWorks'>
            <a href='https://matias5804.github.io/pokedexReact/' target="_blank" rel='noreferrer'>
              <button>Visit the Site</button>
            </a> 

            <a href='https://github.com/matias5804/pokedexReact.git' target="_blank" rel='noreferrer'>
              <button>See GitHub</button>
            </a>
          </div>
        </div>

        <div className='divVideo'>
          <video 

          className='videoWorks'
          
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          ></video>

          <img  alt='pokemon'/>
        </div>
      </div>

    </div>
  )
}

export default NoCountry