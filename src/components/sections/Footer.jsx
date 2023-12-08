import React from 'react'
import Cities from '../Cities'
import FooterLinks from '../FooterLinks'
import { footerLinks } from '../../constants'

const Footer = () => {
  return (
    <div className='max-container'>
        <div>
            <Cities/>
        </div>
        <hr className='mt-[115px] bg-[#424242]' />
        <div className='grid grid-cols-3'>
            {
                footerLinks?.map((item, index) => (
                    <FooterLinks key={index} title={item.title} links={item.links}/>
                ))
            }
        </div>
        <hr className='mt-[115px] bg-[#424242]'/>
        <div></div>
    </div>
  )
}

export default Footer