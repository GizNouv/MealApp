import React from 'react'

const FooterLinks = ({title , links}) => {
  return (
    <div>
        <h3 className='text-xl font-bold text-white'>{title}</h3>
        <ul className='mt-10 text-[#F5F5F5]'>
            {
                links?.map((item, index) => (
                   <li key={index}>
                    <a href='/'>{item}</a>
                   </li> 
                ))
            }
        </ul>
    </div>
  )
}

export default FooterLinks