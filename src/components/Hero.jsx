import React from 'react'
import heroImg from "../assets/hero.jpeg"
import { FaGitSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className=' py-24'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8'>
            <article>
                <h1 className='text-7xl font-bold tracking-wider capitalize'>I'm vignesh </h1>
                <p className=' mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                    full stack web developer
                </p>
                <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                    Code. Create. Innovate.
                </p>
                <div className='flex gap-x-4 mt-4'>
                    <a href="https://github.com/Violentvicky5">
                        <FaGitSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                    <a href="#">
                        <FaInstagram className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                    <a href="https://www.linkedin.com/in/vignesh-ravichandran-a16300378">
                        <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                </div>
            </article>
            <article className='hidden md:block'>
                <img src={heroImg} alt="my_img" className='h-80 lg:h-96'/>
            </article>
        </div>
        </div>
  )
}

export default Hero;