
import React from 'react'
import './contact.css'
import {FaEnvelopeOpen} from "react-icons/fa"
import {FaPhoneSquareAlt} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FiSend } from 'react-icons/fi'


const Contact = () => { 
    return (
        <section className='contact section'>
            <h2 className="section__title">
                Entrar em <span>Contato</span>
            </h2>

             <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Não seja timido</h3>
                
                    <p className="contact__description">
                        Sinta-se a vontade para entrar em contato.
                    </p>

                    <div className="contact__info">
                       
                        <div className="info__item">
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className='info__title'> Email: </span>
                                <h4 className='info__desc'> sabrinabeatrizdasilva196@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'> Telefone: </span>
                                <h4 className='info__desc'> 11 99668-9487 </h4>
                            </div>
                        </div>
                    </div>


                    <div className='contact__socials'>
                        <a href='https://www.instagram.com/_sabrinabeatrizx/' className='contact__social-link'>
                            <FaInstagram />
                        </a>

                        <a href='https://www.linkedin.com/in/sabrina-beatriz-5ba22b25a' className='contact__social-link'>
                            <FaLinkedin />
                        </a>

                        <a href='https://github.com/SabrinaBeatriz19' className='contact__social-link'>
                            <FaGithub />
                        </a>

                    </div>
                </div>

                <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type='text' 
                            placeholder='Seu Nome'
                            className='form__control' />
                        </div>

                        <div className="form__input-div">
                            <input type='email' 
                            placeholder='Seu Email'
                            className='form__control' />
                        </div>

                        <div className="form__input-div">
                            <input type='text' 
                            placeholder='Assunto'
                            className='form__control' />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea placeholder='Sua Mensagem' 
                            className='form__control textarea'>
                        </textarea>
                    </div>
                    <button className='button'>
                        Enviar
                        <span className='button__icon contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
             </div>
        </section>
    )
}
export default Contact