import React from 'react'
import Stats from '../../components/Stats'
import {FaDownload} from 'react-icons/fa'
import CV from "../../assets/sabrina-Cv.pdf"
import Skills from '../../components/Skills'
import './about.css'



const About = () => { 
    return (
        <main className='section container'>
            <section className='about'>
                <h2 className='section__title'> 
                Sobre <span>Mim</span>
                </h2>

                <div className="about__container grid">
                    <div className='stats grid'>
                        <Stats />
                    </div>
                    
                    <div className="about__info">
                        <a href={CV} download='' className="button">
                            Download
                        <span className="button__icon">
                            <FaDownload />
                        </span>
                        </a>
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className='skills'>
                <h3 className="section__subtitle subtitle__center">
                    Minhas Habilidades
                    </h3>
                    <br />

                <div className="skills__container grid">
                    <Skills />
                </div>
            </section>

            <div className="separator"></div>

        </main>
    )
}
export default About;