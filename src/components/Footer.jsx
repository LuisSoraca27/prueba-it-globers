import React from 'react';
import shield from '../../public/shield-halved-solid.svg'
import secure from '../../public/secure.png'
import facebook from '../../public/facebook.svg'
import instagram from '../../public/instagram.svg'
import twitter from '../../public/twitter.svg'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='container __one'>
                <h4>Pufi</h4>
            </div>
            <div className='container __two'>
                <p>PUFI RAIN</p>
                 <p>PUFI PUFF</p>
                 <p>PUFI CART</p>
                 <p>PUFI NAP</p>
            </div>
            <div className='container __three'>
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>CÓMO COMPRAR</p>
                <p>TÉRMINOS & CONDICIONES</p>
            </div>
            <div className='container __four'>
                <p>COMPRA 100% SEGURA</p>
                <div className="__four__content">
                <img src={secure} alt="" />
                <img src={shield} alt="" />
                <p>
                Compra con la garantia de pufi
                </p>
                </div>
            </div>
            <div className='container __five'>
               <p> siguenos en </p>
               <img src={facebook} alt="" />
               <img src={twitter} alt="" />
               <img src={instagram} alt="" />
            </div>
        </footer>
    );
};

export default Footer;