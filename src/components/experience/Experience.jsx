import React from 'react'
import './experience.css'
import { HiBadgeCheck, HiColorSwatch } from "react-icons/hi";
const Experience = () => {
 
  return (
    <section id = "experience">
      <h2 style={{color : "aliceblue"}}>What Skills I Have</h2>
      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-End Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div>
           </article>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>CSS</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div> </article>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>JavaScript</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div></article>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>React</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div> </article>

          </div>
        </div> 

        <div className='experience__backend'>
          <h3>Back-End Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>NodeJs</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div></article>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>Express</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div></article>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>MongoDB</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div></article>
            <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
               <h4>MySQL</h4>
              {/* <small className='text-light'>Experienced</small>
              */}
            </div></article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience