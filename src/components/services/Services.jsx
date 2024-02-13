import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import './services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('#education');

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  return (
    <section id="services">
      <h2 className='section__title'>Qualification</h2>
      {/* <h1 className='qualification__subtitle'>My personal journey</h1> */}

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={`qualification__button button--flex ${activeTab === '#education' ? 'qualification__active' : ''}`} onClick={() => handleTabClick('#education')}>
           <div className='qualification__icon'>
           <FaGraduationCap className='qualification__icon' />
            Education
           </div> 
          </div>

          <div className={`qualification__button button--flex ${activeTab === '#work' ? 'qualification__active' : ''}`} onClick={() => handleTabClick('#work')}>
              <div className='qualification__icon'>
              <FaBriefcase className='qualification__icon' />
              Work Experience
              </div>
          </div>
        </div>
        <div className='qualification__sections'>
          {/* ------------Qualification content 1------------ */}
          <div className={`qualification__content ${activeTab === '#education' ? 'qualification__active' : ''}`} data-content id='education'>
            {/* -----------------Qualification 1-------------- */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>B.Tech Computer Engineer</h3>
                <span className='qualification__subtitle'>Madan Mohan Malaviya University of Technology</span>
                <div className='qualification__calendar'>
                  <CiCalendarDate className='qualification__calendar' />
                  2020 - 2024
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            {/* -----------------Qualification 2-------------- */}
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>XII</h3>
                <span className='qualification__subtitle'>Oxford Model Sr. Secondary School</span>
                <div className='qualification__calendar'>
                  <CiCalendarDate className='qualification__calendar' />
                  2019
                </div>
              </div>
            </div>
            {/* -----------------Qualification 3-------------- */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>X</h3>
                <span className='qualification__subtitle'>St. Mary's Orthodox School</span>
                <div className='qualification__calendar'>
                  <CiCalendarDate className='qualification__calendar' />
                  2027
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                {/* <span className='qualification__line'></span> */}
              </div>
            </div>
          </div>

          {/* -----------------Work-------------- */}
          <div className={`qualification__content ${activeTab === '#work' ? 'qualification__active' : ''}`} data-content id="work">
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Intern</h3>
                <span className='qualification__subtitle'>Cloud Counselage</span>
                <div className='qualification__calendar'>
                  <CiCalendarDate className='qualification__calendar' />
                  July, 23 - Sep, 23
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            {/* -----------------Qualification 2-------------- */}
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Development Intern</h3>
                <span className='qualification__subtitle'>CodeClause</span>
                <div className='qualification__calendar'>
                  <CiCalendarDate className='qualification__calendar' />
                  May, 23 - Jun, 23
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
