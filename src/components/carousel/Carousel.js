
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./carousel.css";
import "swiper/css/navigation";

import imgEliot from "../../assests/img/sliderPorfolio/eliotResponsive.png"
import imgVidya from "../../assests/img/sliderPorfolio/vidyaResponsive.png"
import imgMovies from "../../assests/img/sliderPorfolio/moviesResponsive.png"
import imgTatoo from "../../assests/img/sliderPorfolio/tatooResponsive.png"
import imgGgtech from "../../assests/img/sliderPorfolio/ggtechResponsive.png"
import imgPokemon from "../../assests/img/sliderPorfolio/pokemonResponsive.png"
import imgWeRemote from "../../assests/img/sliderPorfolio/weRemoteRespo.png"

// import required modules
import { EffectCube, Navigation} from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation={true}
        
        modules={[EffectCube, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imgEliot} className="imgSlider" alt=""/>  

          <div className="divTitleBtnSlider">
            <h3>Beer Factory Eliot Ness</h3>
            <a href="#eliot">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imgVidya} alt="" className="imgSlider"/>
          <div className="divTitleBtnSlider">
            <h3>Vidya E-commerce</h3>
            <a href="#vidya">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imgTatoo} className="imgSlider" alt=""/>
          
          <div className="divTitleBtnSlider">
            <h3>LT - Equipment</h3>
            <a href="#tatoo">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imgMovies} alt="" className="imgSlider"/>
          
          <div className="divTitleBtnSlider">
            <h3>Movies with React</h3>
            <a href="#movies">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imgPokemon} className="imgSlider" alt=""/>
          
          <div className="divTitleBtnSlider">
            <h3 >Pokemons with React</h3>
            <a href="#pokemon">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={imgGgtech} alt="" className="imgSlider"/>
          
          <div className="divTitleBtnSlider">
            <h3>Challenge Gg-tech</h3>
            <a href="#ggtech">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imgWeRemote} alt="" className="imgSlider"/>
          
          <div className="divTitleBtnSlider">
            <h3>Challenge We-Remote</h3>
            <a href="#weRemote">
              <button>More Info</button>  
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
