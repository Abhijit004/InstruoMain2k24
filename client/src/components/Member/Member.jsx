import React from 'react'
import './Member.css'

const Member = ({name, position, src}) => {
  const vanish = name.length ? "" : "vanish"
  return (
    <div className={"member " + vanish}>
        <img src={src} alt="img" />
        <div className="info">
            <span style={{fontSize: '1.2rem', fontWeight: 600, lineHeight: '1.2rem', width: '12ch'}}>{name}</span>
            <span style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '1rem'}}>{position}</span>
        </div>
    </div>
  )
}

export default Member