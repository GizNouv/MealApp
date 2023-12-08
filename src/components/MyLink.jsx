import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyLink = ({styles , content , isIcon , src , link ,styles2}) => {
  return (
    <a href={link} className={`custom-btn ${styles}`}>
        {
            isIcon ? <FontAwesomeIcon icon={src} className={styles2} /> : ""
        }
        <span>{content}</span>
    </a>
  )
}

export default MyLink