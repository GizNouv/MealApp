import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faUser , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import MyLink from '../MyLink'
import { logo } from '../../assets/icons'

const Nav = () => {
  return (
    <header className='bg-white py-6 shadow-object fixed z-10 left-0 right-0'>
        <nav className='flex-between max-container'>
            <div className='text-warning items-end text-3xl font-bold'>
                <a href="/" className='flex'>
                  <img src={logo} alt="logo" width={28} height={28} className='mr-2' />
                  Food<span className='text-primary'>Wagon</span>
                </a>
            </div>
            <div className='font-bold'>
              Deliver to:
              <FontAwesomeIcon icon={faLocationDot} className='text-primary mx-2' />
              <span className='font-light mr-1'>Current Location</span>
              Mohammadpur Bus Stand, Dhaka
            </div>
            <div className='flex items-center gap-2'>
              <MyLink
                link="#search"
                content="Search Food"
                isIcon={true}
                src={faMagnifyingGlass}
                styles="flex gap-2 font-bold text-[#424242]"
                styles2="text-primary"
              />
              <MyLink
                link="/"
                content="Login"
                isIcon={true}
                src={faUser}
                styles="login_btn"
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav