import React from 'react'
import Heading from './heading'

const images= [
    {url:"https://placehold.co/600x400.png",key:'1'},
    {url:"https://placehold.co/600x400.png",key:'2'},
    {url:"https://placehold.co/600x400.png",key:'3'}
    
]

const AboutUs = () => {
    const imageList = images.map(img=>{return <li key={img.key}><img className="h-auto max-w-full" src={img.url} alt=''/></li>})
  return (
    <div>
      <Heading name={"About Us"}/>
    <div className='container mx-auto'>
        <div className='flex flex-wrap items-center p-4'>
        <ul className='flex flex-col md:flex-row gap-4'>
            {imageList}
        </ul>
        <p className='mt-4 text-white '>
        Inspired by Toronto’s vibrant and diverse food culture and our love for the foods that we grow up with, we embarked on a journey that started with a storefront shop located in Toronto Koreantown (Bloor & Christie). Our journey is guided with a promise to bring Toronto and its visitors authentic and savoring tastes of Banh Mi and Vietnamese street food.
        </p>
        </div>
    </div>
    </div>
  )
}

export default AboutUs