import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr'
import { ImInstagram } from 'react-icons/im'
import { AiFillApple } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
// import Happy from '../../Images/Happy.png'
import { CgMail } from 'react-icons/cg'
import { IoCall } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'
import './style.css'

const Footer = () => {
  const [buttonClick, setButtonClick] = useState(false)
  const handleClick = () => {
    setButtonClick(!buttonClick)
  }

  const handleClose = () => {
    setButtonClick(!buttonClick)
  }

  return (
    <>
      <div className='Footer'>
        <div className='let-us-know'>
          <h2>Didn't Find What You Were Looking For?</h2>
          <button className='let-us-know-button' onClick={handleClick}>
            LET US KNOW
          </button>
          {buttonClick && (
            <div className='formlogo'>
              <div className='form-heading'>
                <h4>Your Requirements</h4>
                <GrFormClose className='close-icon' onClick={handleClose} />
              </div>
              <div className='form-container'>
                <div className='form-parts'>
                  <label htmlFor='FullName'>FullName</label>
                  <input type='text' placeholder='e.g susmita khanal' />
                </div>
                <div className='form-parts'>
                  <label htmlFor='EmailAddress'>EmailAddress</label>
                  <input type='text' placeholder='e.g domain@gmail.com' />
                </div>
                <div className='form-parts'>
                  <label htmlFor='Mobile Number'>Mobile Number</label>
                  <input type='number' placeholder='e.g 984523578' />
                </div>
                <div className='form-parts'>
                  <label htmlFor='Purpose'>Purpose</label>
                  <div className='form-radio-parts'>
                    <input type='radio' value='Buy' />
                    <label htmlFor='Buy'>Visitor Visa</label>

                    <input type='radio' value='Rent' />
                    <label htmlFor='Rent'>Business Visa</label>

                    <input type='radio' value='Lease' />
                    <label htmlFor='Lease'>Medical Visa</label>

                    {/* <input type='radio' value='Hotel' />
                    <label htmlFor='Hotel'>Hotel</label> */}
                  </div>
                </div>
                <div className='message-parts'>
                  <label htmlFor='Message'>Message</label>
                  <textarea
                    // cols="137"
                    className='message'
                    placeholder='Provide us additional details'
                  />
                </div>
                <button type='submit' className='submit-part'>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
        {/* <div className='Property-container'>
          <h2>Property by area</h2>
          <div className='property-list'>
            <li>
              <Link className='property-link'>
                Properties in Budhanilkantha
              </Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Imadol</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Kapan</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Baluwatar</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Sitapaila</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Bhaisipati</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Bhaktapur</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Hattigauda</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Tokha</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Kalanki</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Basundhara</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Jorpati</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Dhapasi</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Tikathali</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Baneswor</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Samakoshi</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Maharajgunj</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Bhangal</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Balaju</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Golfutar</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Gokaneswor</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Mulpani</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Sanepa</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Kadaghari</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Thali</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Bhaktapur</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Pepsicola</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Hattiban</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Tarkeshwor</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Godawari</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Sakhu</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Mandikhatar</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Dhapakhel</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Lazimpat</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Gongabu</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Lalitpur</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Chabahil</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Sukedhara</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Hetauda</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Pokhara</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Kirtipur</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Chandragiri</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Boudha</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Koteshwor</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Dhumbarai</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Thankot</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Sudal</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Naxal</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Suryabinayak</Link>
            </li>
            <li>
              <Link className='property-link'>Properties in Pasikot</Link>
            </li>
          </div>
        </div> */}
        <div className='footer-basobaas-container'>
          <div className='basobaas-part'>
            <div className='basobaas'>
              <img src='/Images/Happy.png' slt='Happy logo' />
            </div>
            <div className='basobaas-part-data'>
              <MdLocationPin />
              Sinamangal Chowk, Kathmandu
            </div>
            <div className='basobaas-part-data'>
              <CgMail />
              tourshappy321@gmail.com
            </div>
            <div className='basobaas-part-data'>
              <IoCall />
              +977 9703410477
            </div>
            {/* <div className='basobaas-part-data'>© Happy tours & travels</div> */}
            <div className='basobaas-part-data social-links'>
              Social Media Links
            </div>
            <div className='basobaas-part-data basobaas-part-icon'>
              <FaFacebookF className='data-icon' />
              {/* <GrYoutube className='data-icon' /> */}
              <ImInstagram className='data-icon' />
            </div>
          </div>
          <div className='links-part'>
            <div className='links-part-heading'>Links</div>
            <Link className='basobas-part-link'>Social Responsibilities</Link>
            <Link className='basobas-part-link'>Privacy</Link>
            <Link className='basobas-part-link'>Destinations</Link>
            <Link className='basobas-part-link'>Advertise</Link>
            <Link className='basobas-part-link'>Listing Policy</Link>
          </div>
          <div className='company-part'>
            <div className='company-part-heading'>Company</div>
            <Link className='basobas-part-link'>About</Link>
            <Link className='basobas-part-link'>Travel Guide</Link>
            <Link className='basobas-part-link'>Caerrers</Link>
            <Link className='basobas-part-link'>Contacts</Link>
            {/* <Link className='basobas-part-link'>Add Your Property</Link> */}
          </div>
          {/* <div className='downloads-part'>
            <h2>Download Our Apps</h2>
            <div className='box'>
              <AiFillApple className='inner-icon' />
              <div className='inner-division'>
                <div className='title'>Download on the</div>
                <div className='App'>Appstore</div>
              </div>
            </div>
            <div className='box'>
              <FaPlay className='inner-icon' />
              <div className='inner-division'>
                <div className='title'>GET IT ON</div>
                <div className='App'>Google Play</div>
              </div>
            </div>
          </div> */}
        </div>
        <div className='Disclaimer'>
          <h2>About Us</h2>
          <p>
            Happy Tours & Travels is a registered tours and travel company in
            Nepal. We provide tailor-made journeys and an easy, comfortable trip
            for the better experience of our customers. We offer trips for
            Visiting purposes, Business purposes and Medical purposes.
            <div className='basobaas-part-data'>© Happy tours & travels</div>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
