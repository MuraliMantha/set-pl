import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-container'>
        <img src='/assets/logo.png' alt='Logo' className='footer-logo'/>
        <div className='footer-social-container'>
            <a href='https://github.com/victor-kramarenko' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/github.png' alt='GitHub' className='footer-social-icon'/>
            </a>
            <a href='https://www.linkedin.com/in/victor-kramarenko/' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/linkedin.png' alt='LinkedIn' className='footer-social-icon'/>
            </a>
            <a href='https://www.instagram.com/victor_kramarenko/' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/insta.webp' alt='Instagram' className='footer-social-icon'/>
            </a>
            <a href='https://www.facebook.com/victor-kramarenko/' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/facebook.png' alt='LinkedIn' className='footer-social-icon'/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
