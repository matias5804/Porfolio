import React from 'react'
import imgPokemonRespon from '../../assests/img/sliderPorfolio/pokemonRespon.png'
import videoPokemon from '../../assests/movies/pokemon.mp4'

const Pokemon = () => {
  return (
    <div>
      <div className='divProyects proyectPoke'>
            <div className='divInfo divInfoPoke'>
                <div>
                    <h1>Pokemon</h1>
                    <h2>Personal Pokedex</h2>
                </div>
                <p>Vidya is a project that was born with the intention of raising awareness through greater understanding about sustainability and care for the environment on a daily basis. It not only seeks to market ecological and sustainable products but also aims to inform and teach users about the different habits that can be adopted, from consumption to recycling, to encourage societies to be more respectful of the environment and more aware of what they consume.</p>
              <div className='btnsWorks'>
                <button>Visit the Site</button>
                <button>See GitHub</button>

              </div>
            </div>
            <div className='divVideo'>

                <video 
                src={videoPokemon}
                className='videoWorks'
                
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                ></video>

                <img src={imgPokemonRespon} alt='pokemon'/>
    
            </div>
        </div>

    </div>
  )
}

export default Pokemon