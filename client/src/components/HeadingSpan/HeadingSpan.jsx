import React from 'react'
import './HeadingSpan.css'

const HeadingSpan = ({text, direction, size}) => {
  return (
    <span style={{fontSize: size}} className={`instruo-span ${direction ? 'down' : ''}`}>
        {text}
    </span>
  )
}

export default HeadingSpan