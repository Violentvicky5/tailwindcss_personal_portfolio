import React from 'react'
import {links} from "../data"
const Navbar = () => {
  return (
    <div className='bg-emerald-100 sticky top-0 z-50 shadow-md'>
        <div className=' align-element py-4 flex flex-col sm:flex-row  sm:gap-x-16 sm:items-center sm:py-8 capitalize'>
           <h2 className='text-3xl font-bold '>personal <span className='text-emerald-600 ' >portfolio</span></h2>
      
       
        <div className='flex flex-wrap gap-x-1 gap-y-1 sm:gap-x-4 mt-2 sm:mt-0'>{links.map((link)=>{
            const {id,href,text} = link
            return <a key={id} href={href} className='capitalize text-lg tracking-wide  hover:bg-emerald-600 duration-300'>
                {text}
            </a>
        })}</div>
        </div>
          </div>
  )
}

export default Navbar