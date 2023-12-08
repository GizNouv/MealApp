import React from 'react'
import { app } from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import AppButton from '../AppButton'

const InstallTheApp = () => {
  return (
    <div className='max-container pt-16 flex items-center'>
        <div>
            <img src={app} alt="app" />
        </div>
        <div className='ml-20'>
            <div className='w-[70%]'>
                <h2 className='text-[4.25rem] font-bold text-warning'>Install the app</h2>
                <p className='text-[#827E7E] mt-2'>It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
            </div>
            <div className='mt-10 flex gap-2'>
                <AppButton
                    icon={faGooglePlay}
                    appName="Google Play"
                    sub="GIT IT ON"
                />
                <AppButton
                    icon={faApple}
                    appName="App Store"
                    sub="Download on the"
                />
            </div>
        </div>
    </div>
  )
}

export default InstallTheApp