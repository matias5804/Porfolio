
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


// import required modules
import { EffectCube, Pagination} from "swiper";


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

        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imgEliot} className="imgSlider" alt=""/>  

          <div className="divTitleBtnSlider">
            <h3>Cervecería Eliot Ness</h3>
            <button>Ver Más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgVidya} alt="" className="imgSlider"/>
          <div className="divTitleBtnSlider">
            <h3>Vidya Sustentable</h3>
            <button>Ver Más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgTatoo} className="imgSlider" alt=""/>
          
          <div className="divTitleBtnSlider">
            <h3>LT - Equipment</h3>
            <button>Ver Más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgMovies} alt="" className="imgSlider"/>
          
          <div className="divTitleBtnSlider">
            <h3>Movies with React</h3>
            <button>Ver Más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgPokemon} className="imgSlider" alt=""/>
          
          <div className="divTitleBtnSlider">
            <h3 >Pokemons with React</h3>
            <button>Ver Más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgGgtech} alt="" className="imgSlider"/>
          
          <div className="divTitleBtnSlider">
            <h3>Desafío Gg-tech</h3>
            <button>Ver Más</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
