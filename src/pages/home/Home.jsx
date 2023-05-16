import React from "react";
import Profile from "../../assets/home.jpeg";
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
import "./home.css"

const Home = () => { 
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"> 
                    <span>Eu sou a Sabrina Beatriz. </span> Desenvolvedora
                    </h1>

                    <p className="home__description">
                                                        
                    </p>

                    <Link to='./about' className="button">
                        Mais sobre mim <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>

                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}
export default Home;