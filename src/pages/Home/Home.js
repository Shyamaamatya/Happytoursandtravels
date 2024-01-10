import React from 'react'
import './style.css'
// import banner from '../../Images/banner.jpg'
// import Happy from '../../Images/Happy.png'
import Navbar from '../../components/Navbar/Navbar'
import Navdown from '../../components/Navdown/Navdown'
import Carousel from '../../components/Carousel'

function Home() {
  return (
    <div>
      {/* <div className='Navdown'>
        <Navdown />
      </div> */}

      <div className='Carousel'>
        <Carousel />
      </div>

      {/* <div className='banner'>
        <img src="/banner.png" alt='Logo' />
      </div> */}

      <div className='about'>
        <div className='about-img'>
          <img src='./Images/travel.jpg' alt='travel' />
        </div>
        <div className='intro'>
          <p>
            Happy Tours and Travels offers top-notch assistance with obtaining a
            visa for Schengen nations, as well as Canada, Australia, and Japan.
            We also provide travel packages that include trekking in Nepal.
          </p>
        </div>
      </div>

      <div className='destinations'>
        <h4>Featured Destinations</h4>
        <div className='card-container'>
          <div className='card'>
            <div className='card1'>
              <img src='/Images/Austria.jpg' alt='ful' />
            </div>
            <div className='card-content'>
              <h5>Canada</h5>
              <p>9 nights, 10 days</p>
              <h6>view</h6>
            </div>
          </div>

          <div className='card'>
            <div className='card1'>
              <img src='/Images/Belgium.jpg' alt='ful' />
            </div>
            <div className='card-content'>
              <h5>Australia</h5>
              <p>9 nights, 10 days</p>
              <h6>view</h6>
            </div>
          </div>

          <div className='card'>
            <div className='card1'>
              <img src='/Images/Canada.jpg' alt='ful' />
            </div>
            <div className='card-content'>
              <h5>Japan</h5>
              <p>9 nights, 10 days</p>
              <h6>view</h6>
            </div>
          </div>

          <div className='card'>
            <div className='card1'>
              <img src='/Images/Dubai.jpg' alt='ful' />
            </div>
            <div className='card-content'>
              <h5>Europe</h5>
              <p>9 nights, 10 days</p>
              <h6>view</h6>
            </div>
          </div>

          <div className='card'>
            <div className='card1'>
              <img src='/Images/Finland.jpg' alt='ful' />
            </div>
            <div className='card-content'>
              <h5>Nepal</h5>
              <p>9 nights, 10 days</p>
              <h6>view</h6>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='image-container'>
          <div className='image'>
            <img src='/Images/ntb.jpg' alt='grow' />H
            <div className='text'>
              <h5>
                Registered with: Company Registration office, Government of
                Nepal
              </h5>
            </div>
          </div>

          <div className='image'>
            <img src='/Images/registration.png' alt='grow' />
            <div className='text'>
              <h5>Licensed by: Nepal Tourism Board & Department of Tourism</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
