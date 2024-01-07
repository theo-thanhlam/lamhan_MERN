import React from 'react'

import OrderButtonList from './OrderButtonList'
import WelcomeImg from '../images/welcome-img.png'




const Welcome = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">

        <div className="w-full md:w-1/2">
          <div className="m-4 " >
            <h2 className="text-center text-3xl font-semibold text-orange-500 mb-4 ">
              Welcome to Lamhan Banh mi
            </h2>
            <p className="text-center mb-4 text-white">
              Lamhan is a Toronto based Vietnamese Banh Mi shop specializing in Banh Mi sandwiches and Vietnamese street food
            </p>

            <div className="flex justify-center">
            <OrderButtonList/>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="m-4" data-aos="fade-right" data-aos-delay="150">
            <img  width="500" height="366"  src={WelcomeImg} alt="welcome" className="img-fluid" />
          </div>
        </div>

      </div>
  </div>
  )
}

export default Welcome