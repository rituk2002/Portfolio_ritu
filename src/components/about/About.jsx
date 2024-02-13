import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id = "about">
      <h5>Get To Know</h5>
      <h2 style={{margin : "5% auto"}}>About Me</h2>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          Hey there! 👋
         <br/>
I'm a Computer Science Engineering student on track to graduate in 2024 from Madan Mohan Malaviya University of Technology.
<br/>
With a deep-rooted passion for coding and an insatiable appetite for learning, I thrive on challenges and am always eager to expand my skill set. Armed with a solid foundation in computer science, I'm excited to dive headfirst into the dynamic world of web development and beyond.
<br/>
Known for my relentless work ethic and unwavering determination, I'm committed to making a meaningful impact in the ever-evolving IT industry. My goal is simple: to leverage my diverse skill set to contribute to impactful projects that drive positive change and innovation.
<br/>
Let's collaborate and create something extraordinary! 💡✨
           </article>
        </div>
      </div>

      

    </section>
  )
}

export default About