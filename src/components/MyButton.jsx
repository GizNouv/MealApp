import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Mybutton = ({styles , content , isIcon , src ,styles2 , eventHandler}) => {
  return (
    <button className={`custom-btn ${styles}`} onClick={eventHandler}>
        {
            isIcon ? <FontAwesomeIcon icon={src} className={styles2} /> : ""
        }
        {content}
    </button>
  )
}

export default Mybutton