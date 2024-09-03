import React from 'react'

const Footer = ({length}) => {
  return (
    <footer className='footer'>{length} {length!==0 ? "items !" : "item !"}</footer>
  )
}

export default Footer