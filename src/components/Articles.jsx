import React, { useState } from "react";
import { Formik } from "formik";

import paraguas from "../../public/paraguas.png";
import flotador from "../../public/flotador.png";
import bolsa from "../../public/bolsa.png";
import almohada from "../../public/almohada.png";
import almohadaa from "../../public/almohada.jpg";
import personas_paraguas from "../../public/personas-paraguas.jpg";
import inflable from "../../public/inflable.webp";
import bolsas from "../../public/bolsas.jpg";

const Articles = () => {
  
  const [emailSend, setEmailSend] = useState(false)

  const imgs = [
    almohadaa,
    personas_paraguas,
    inflable,
    bolsas,
    almohadaa,
    personas_paraguas,
  ];

  return (
    <main-content>
      <article className="container-article">
        <section className="section-one background-img-one">
          <div className="background"></div>
          <div className="section-one__text">SHOP</div>
        </section>
        <section className="section-two">
          <div className="section-two__img">
            <img src={paraguas} alt="" />
          </div>
          <h3 className="section-two__title">Pufi RAIN</h3>
          <p>_______</p>
          <p className="section-two__description">
            Description del producto. Esto es un texto simulado
          </p>
          <p className="section-two__ver-mas">VER MAS</p>
        </section>
      </article>

      <article className="container-article">
        <section className="section-two">
          <div className="section-two__img">
            <img src={flotador} alt="" />
          </div>
          <h3 className="section-two__title">Pufi PUFF</h3>
          <p>_______</p>
          <p className="section-two__description">
            Description del producto. Esto es un texto simulado
          </p>
          <p className="section-two__ver-mas">VER MAS</p>
        </section>
        <section className="section-one background-img-two">
          <div className="background"></div>
        </section>
      </article>

      <article className="container-article">
        <section className="section-one background-img-three">
          <div className="background"></div>
        </section>
        <section className="section-two">
          <div className="section-two__img">
            <img src={bolsa} alt="" />
          </div>
          <h3 className="section-two__title">Pufi CART</h3>
          <p>_______</p>
          <p className="section-two__description">
            Description del producto. Esto es un texto simulado
          </p>
          <p className="section-two__ver-mas">VER MAS</p>
        </section>
      </article>

      <article className="container-article">
        <section className="section-two">
          <div className="section-two__img">
            <img src={almohada} alt="" />
          </div>
          <h3 className="section-two__title">Pufi NAP</h3>
          <p>_______</p>
          <p className="section-two__description">
            Description del producto. Esto es un texto simulado
          </p>
          <p className="section-two__ver-mas">VER MAS</p>
        </section>
        <section className="section-one background-img-four">
          <div className="background"></div>
        </section>
      </article>

      <article className="container-article">
        <section className="section-three">
          <p className="section-three__instagram">INSTAGRAM</p>
          <h3 className="section-three__espufi">#ESPUFI</h3>
          <div className="gallery">
            {imgs.map((img) => (
              <div className="gallery__img">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <p className="section-three__newsletter">NEWSLETTER</p>
          <h2 className="section-three__suscribite">SUSCRIBITE</h2>
          <p>Y enterate de todas las novedades</p>

          <Formik

            initialValues={{
              email: '',
            }}

            validate={(valores) => {
              let errores = {}
        
              if(!valores.email){
                errores.email = 'Por favor ingresa un email'
              }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones, y guíon bajo'
              }
              return errores;
            }}

            onSubmit={(valores, {resetForm}) => {
              resetForm()
              setEmailSend(true)
              setTimeout(() => setEmailSend(false), 5000)
            }}
          >
            {({values,handleSubmit, handleChange, handleBlur, errors }) => (
              <>
               <form className="section-three__input" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button type="submit"></button>
              </form>
              <div>
               {errors.email && <p className="error">{errors.email}</p>}
               {emailSend && <p className="success">Exito</p>}
              </div>
              </>
            )}
          </Formik>
        </section>
      </article>
    </main-content>
  );
};

export default Articles;
