/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa6'





const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-20 ">
    <div className='w-full h-full flex flex-col gap-8'>
        <h1 className=' uppercase font-bold font-titleFont text-5xl text-white  flex items-start'>Moha <span className='text-blue-500'>mmad</span></h1>
        <div>
          <div className="flex gap-8">
            <a href="https://www.facebook.com/ArifMohammad0" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/Creative-Md-Arif" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/md-arif-ma/" target="_blank">
              <span className="bannerIcon">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>
    </div>
    <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>Quick Link</h3>
        <ul className=' flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  About
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                Portfolio
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                Services
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Blog
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Contact
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
        </ul>
    </div>
    <div className='w-full h-full'>
    <h3 className='text-xl uppercase text-designColor tracking-wider'>Resources</h3>
        <ul className=' flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Authentication
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                System Status
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                Terms of Service
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Pricing
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Over Right
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
        </ul>
    </div>
    <div className='w-full h-full'>
    <h3 className='text-xl uppercase text-designColor tracking-wider'>Developers</h3>
        <ul className=' flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Documentation
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                Authentication
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                API Reference
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Support
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
            <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
                  Open Source
                 <span className='absolute h-[1px] w-full  bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                </span>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Footer
