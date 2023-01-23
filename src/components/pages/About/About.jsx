import styled from "./About.module.css";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className={styled.main}>
      <div className={styled.content}>
        <h1>Bienvenidos...</h1>

        <p>
          Hola, si llegaron hasta esta parte del contenido quiero decir que ha
          sido un proyecto interesante de realizar, debo decir que es la primera
          vez que le dedico tanto empeño a la parte de estilos de un proyecto.
          No pude lograrlo solo los compañeros del <strong> SUP </strong> me
          apoyaron en unos puntos que no pude darle solucion.
        </p>
        <p>
          Sin mencionar las diferentes cosas que se puede realizar con
          <strong> React </strong> me gustaria empezar a realizar otros
          proyectos y poner en practica diferentes formas de solucionarlos, hay
          muchas cosas por aprender.
        </p>

        <div className={styled.ref}>
          Si aún no me conoces solo dale click
          <div>
            <a href="https://github.com/Spai26" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/sergioai93/" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
