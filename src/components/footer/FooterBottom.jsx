/* eslint-disable no-unused-vars */
import React from 'react'

const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='w-full py-10'>
      <p className='text-center text-gray-500 text-base'>
        CopyRight {currentYear} . All rights reserved by Md.Arif
      </p>
    </div>
  )
}

export default FooterBottom
