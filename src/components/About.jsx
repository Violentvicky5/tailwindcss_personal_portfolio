import React from 'react'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
   <section className='bg-white py-20 ' id="about">
    <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvLDT9l1zYhyknrkh4UGJdgbNEnQUN2NZtQ&s" 
             alt='about_pic' className='w-full h-64'/>
        <article>
            <SectionTitle text="about"/>
            <p className='text-slate-600 mt-8 leading-loose'>
                Hello, I’m Vignesh Ravichandran, a motivated and passionate aspiring full stack developer. 
                After completing my Bachelor of Engineering degree, I took some time to manage personal responsibilities,
                which gave me a chance to reflect, plan, and focus on building a strong foundation for my career in IT.
                During this period, I dedicated myself to learning and improving my skills, preparing to enter the 
                professional world with confidence and readiness. I believe that every challenge is an opportunity to 
                grow, and I have used this time to strengthen my problem-solving mindset, discipline, and dedication to 
                continuous learning.
                I am eager to start my career in the IT industry and contribute positively to any organization I join. 
                I bring enthusiasm, adaptability, and a strong willingness to learn and take on new challenges. My goal 
                is to grow as a professional, gain real-world experience, and make a meaningful impact through my work.
                I am now ready to begin my professional journey, bringing both determination and a fresh perspective, 
                and I am committed to giving my best to every opportunity that comes my way.           
             </p>
        </article>
    </div>
   </section>
  )
}

export default About