import "./style.css";

// ─── IMÁGENES ─────────────────────────────────────────────
import ellipse3 from "./img/ellipse-3.svg";

import landingUnexia from "./img/landing unexia.png";
import sobreUnexia from "./img/sobre unexia.png";
import contactoUnexia from "./img/contacto unexia.png";
import marcasUnexia from "./img/marcas unexia.png";
import unexia from "./img/unexia.png";

import htmlImg from "./img/html.png";
import githubLogo from "./img/github logo.png";
import cssImg from "./img/css.png";
import jsImg from "./img/js.png";
import linkedinImg from "./img/linkedin.png";

import awsCloud from "./img/aws cloud.jpg";
import awsPractitioner from "./img/aws cloud practicioner.jpg";
import ibmImg from "./img/ibm.jpg";
import javaFundamentals from "./img/java fundamentals.jpg";
import itepImg from "./img/ITEP.jpg";
import scrumImg from "./img/scrum.jpg";
import awsBilling from "./img/aws billing.jpg";

import baseDatosImg from "./img/base datos.png";
import pythonImg from "./img/python.png";
import javaImg from "./img/java.png";
import reactImg from "./img/react.png";
import sqlImg from "./img/sql.jpg";
import azureImg from "./img/azure.jpg";
import coreImg from "./img/core.jpg";
import dartImg from "./img/dart.png";

import whatsappHero from "./img/Principal photo.png";
import whatsappAbout from "./img/foto 1.png";

// ─── PLACEHOLDER PARA LÍNEAS ─────────────────────────────
const LINE_PLACEHOLDER = "";

export const WebDesign = () => {
  return (
    <div className="web-design">
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <div className="home">
        <div className="div" />
        <div className="rectangle-2" />

        <div className="text-wrapper">SOFTWARE DEVELOPMENT STUDENT</div>

        <img className="ellipse" alt="Ellipse" src={ellipse3} />

        <p className="MARIANA">
          <span className="span">M</span>
          <span className="text-wrapper-2">ARIANA</span>
        </p>

        <div className="text-wrapper-4">PORTFOLIO</div>

        <p className="LARA">
          <span className="text-wrapper-5">L</span>
          <span className="text-wrapper-6">ARA</span>
        </p>

        <p className="passionate-about">
          Passionate about Frontend Development &amp; Cloud Computing. I build
          intuitive interfaces and scalable solutions — turning ideas into
          working software.
        </p>

        <img className="whatsapp-image" alt="Whatsapp" src={whatsappHero} />

        {/* Líneas */}
        <img className="line" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="img" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="line-2" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="line-3" alt="Line" src={LINE_PLACEHOLDER} />

        {/* Github */}
        <div className="text-wrapper-7">Github:</div>
        <div className="text-wrapper-8">marianalarag</div>
        <img className="image" alt="Github" src={githubLogo} />

        {/* LinkedIn */}
        <div className="text-wrapper-10">LinkedIn:</div>
        <div className="text-wrapper-9">Mariana Lara</div>
        <img className="image-2" alt="Linkedin" src={linkedinImg} />

        {/* Email */}
        <img className="line-6" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="line-7" alt="Line" src={LINE_PLACEHOLDER} />

        <div className="text-wrapper-13">Email:</div>
        <div className="text-wrapper-12">marianalarag@outlook.com</div>

        {/* Phone */}
        <img className="line-4" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="line-5" alt="Line" src={LINE_PLACEHOLDER} />

        <div className="text-wrapper-11">Phone:</div>

        <div className="element">+52 (999) 104 7545</div>
      </div>

      {/* ════════════════════════════════
          ABOUT ME
      ════════════════════════════════ */}
      <div className="about-me">
        <div className="rectangle-5" />

        <p className="i-m-a-highly">
          I&apos;m a highly motivated software development student with a strong
          passion for innovation. Currently pursuing a career in software
          development at Tecnológico de Software (2024–2028).
        </p>

        <p className="i-m-especially">
          I&apos;m especially passionate about frontend development and cloud
          computing — I enjoy creating intuitive user interfaces and building
          scalable cloud-based solutions.
        </p>

        <p className="p">
          With a solid sense of responsibility, strong time management, and
          quick learning skills, I approach challenges with perseverance,
          adaptability, and a growth mindset.
        </p>

        <div className="text-wrapper-22">About me</div>
        <div className="text-wrapper-23">LARA</div>
        <div className="text-wrapper-24">MARIANA</div>

        <img className="gemini-generated" alt="About" src={whatsappAbout} />

        <img className="whatsapp-image-2" alt="About" src={whatsappAbout} />

        <img className="line-12" alt="Line" src={LINE_PLACEHOLDER} />

        {/* Languages */}
        <div className="english-spanish">
          English B2
          <br />
          Spanish Native
        </div>

        <div className="text-wrapper-25">Languages</div>

        {/* Tools */}
        <div className="text-wrapper-27">Tools</div>

        <div className="VS-code-intellij">
          VS Code
          <br />
          IntelliJ IDEA
          <br />
          Git
          <br />
          GitHub
          <br />
          Figma
          <br />
          Notion
        </div>

        {/* Hard Skills */}
        <div className="text-wrapper-26">Hard Skills</div>

        <img className="image-20" alt="HTML" src={htmlImg} />
        <img className="image-21" alt="Python" src={pythonImg} />
        <img className="image-22" alt="Java" src={javaImg} />
        <img className="image-23" alt="React" src={reactImg} />
        <img className="image-24" alt="Core" src={coreImg} />
        <img className="image-25" alt="SQL" src={sqlImg} />
        <img className="image-26" alt="Dart" src={dartImg} />
        <img className="image-27" alt="Core" src={coreImg} />
        <img className="image-28" alt="HTML" src={htmlImg} />
        <img className="image-29" alt="Database" src={baseDatosImg} />
      </div>

      {/* ════════════════════════════════
          PROJECTS
      ════════════════════════════════ */}
      <div className="projects">
        <div className="rectangle-3" />

        <img
          className="captura-de-pantalla"
          alt="Landing"
          src={landingUnexia}
        />

        <div className="rectangle-4" />

        <div className="text-wrapper-16">Landing Page</div>

        <img className="image-13" alt="Landing" src={landingUnexia} />

        <div className="text-wrapper-17">UNE</div>
        <div className="text-wrapper-18">XIA</div>
        <div className="text-wrapper-19">X</div>

        <div className="element-2">01</div>

        <img className="line-9" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="line-10" alt="Line" src={LINE_PLACEHOLDER} />
        <img className="line-11" alt="Line" src={LINE_PLACEHOLDER} />

        {/* Tech icons */}
        <img className="image-14" alt="HTML" src={htmlImg} />
        <img className="image-15" alt="CSS" src={cssImg} />
        <img className="image-16" alt="JS" src={jsImg} />

        <img className="en-la-interseccin" alt="Unexia" src={unexia} />

        <p className="es-una-interfaz">
          <span className="text-wrapper-20">E</span>

          <span className="text-wrapper-21">
            s una interfaz donde la usabilidad se encuentra con la aspiración,
            permitiendo que el usuario navegue sin fricciones entre programas de
            alta especialización y una comunidad vibrante de beneficios
            exclusivos.
          </span>
        </p>

        {/* Screenshots */}
        <img className="image-17" alt="Sobre" src={sobreUnexia} />
        <img className="image-18" alt="Contacto" src={contactoUnexia} />
        <img className="image-19" alt="Marcas" src={marcasUnexia} />
      </div>

      {/* ════════════════════════════════
          CERTIFICATES
      ════════════════════════════════ */}
      <div className="certificates">
        <div className="text-wrapper-14">C</div>
        <div className="text-wrapper-15">ERTIFICATES</div>

        <img className="line-8" alt="Line" src={LINE_PLACEHOLDER} />

        <img className="image-3" alt="AWS" src={awsCloud} />
        <img className="image-4" alt="AWS" src={awsPractitioner} />
        <img className="image-5" alt="AWS" src={awsCloud} />
        <img className="image-6" alt="AWS" src={awsPractitioner} />
        <img className="image-7" alt="Java" src={javaFundamentals} />
        <img className="image-8" alt="ITEP" src={itepImg} />
        <img className="image-9" alt="Scrum" src={scrumImg} />
        <img className="image-10" alt="IBM" src={ibmImg} />
        <img className="image-11" alt="Billing" src={awsBilling} />
        <img className="image-12" alt="Azure" src={azureImg} />
      </div>
    </div>
  );
};
