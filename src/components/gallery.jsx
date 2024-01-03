import React from 'react'
import Heading from './heading'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1   
  };

  return (
    <div>
      <Heading name={"Gallery"}/>
      
      <div className="w-3/4 m-auto">
        <div className="mt-15">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='bg-white h-[400px] text-black rounded-xl'>
                <div className='h-56 rounded-t-xl bg-white-500 flex justify-center items-center'>
                  <img src={d.img} alt='h-44 w-44' className='h-44 w-44 rounded-full' />
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p>{d.description}</p>
                  <button className='bg-orange-500 text-white text-lg px-6 py-1 rounded-xl'> Order </button>
                </div>
              </div>  
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};


const data = [
  {
    name: 'Banhmi Classic',
    img: '/dishes/menu1-classic.png',
    description: '#SaigonAuthentic'
  },

  {
    name: 'Shrimp Fresh Rolls',
    img: '/dishes/shrimp-fresh-rolls.png',
    description: '#HealthyStreetfood'
  },

  {
    name: 'Banhmi Cheese Sauce Beef',
    img: '/dishes/menu1-cheesesauce.png',
    description: '#FusionSandwich'
  },

  {
    name: 'Pork Rolls Vermicelli',
    img: '/dishes/vermicelli-pork.png',
    description: '#PorkLovers'
  },

  {
    name: 'Chicken Curry',
    img: '/dishes/menu1-chickencurry.png',
    description: '#VietnameseCurry'
  },

  {
    name: 'Chicken Curry',
    img: '/dishes/menu1-chickencurry.png',
    description: '#VietnameseCurry'
  },

  {
    name: 'Chicken Curry',
    img: '/dishes/menu1-chickencurry.png',
    description: '#VietnameseCurry'
  },

  {
    name: 'Banhmi Classic',
    img: '/dishes/menu1-classic.png',
    description: '#SaigonAuthentic'
  }
]


export default Gallery