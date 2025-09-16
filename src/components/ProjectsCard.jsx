import React from 'react'
import { FaGitSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'



const ProjectsCard = ({url, img, github,title,text})=> {
  return (
   <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
  <div className="w-full h-60 overflow-hidden rounded-t-lg"> 
    <img 
      src={img} 
      alt={title} 
      className='w-full h-full object-cover'  
    />
  </div>
  <div className='capitalize p-8'>
    <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
    <p className='mt-4 text-slate-700 leading-loose'>
      {text}
    </p>
    <div className='mt-4 flex gap-x-4'>
      <a href={github}>
        <FaGitSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
      </a>
    </div>
  </div>
</article>

  );
}

export default ProjectsCard;