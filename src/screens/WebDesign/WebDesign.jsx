import "./style.css";

// ─── IMÁGENES ─────────────────────────────────────────────
import { CertificatesCarousel } from "./CertificatesCarousel";
import { ProjectSlider } from "./ProjectSlider";
import ellipse3 from "./img/ellipse-3.svg";
import line from "./img/line.png";
import line2 from "./img/line_c.png";
import line3 from "./img/Line 3.png";
import line4 from "./img/Line 4.png";

import htmlImg from "./img/html.png";
import githubLogo from "./img/github logo.png";
import emailImg from "./img/email.png";
import phoneImg from "./img/phone.png";

import cssImg from "./img/css.png";
import jsImg from "./img/js.png";
import linkedinImg from "./img/linkedin.png";

import awsCloud from "./img/aws cloud.jpg";
import awsPractitioner from "./img/aws cloud practicioner.jpg";
import ibmImg from "./img/ibm.jpg";
import javaFundamentals from "./img/java fundamentals.png";
import itepImg from "./img/ITEP.jpg";
import scrumImg from "./img/scrum.jpg";
import awsBilling from "./img/aws billing.jpg";

import baseDatosImg from "./img/base datos.png";
import pythonImg from "./img/python.png";
import javaImg from "./img/java.png";
import reactImg from "./img/react.png";
import sqlImg from "./img/sql.jpg";
import azureImg from "./img/azure.jpg";
import dartImg from "./img/dart.png";
import phpImg from "./img/php.png";
import odooImg from "./img/odoo.png";
import aws from "./img/amazon.png";
import springImg from "./img/spring.png";

import principalphoto from "./img/photo 1.png";
import whatsappAbout from "./img/foto 1.png";
import photo2 from "./img/foto 2.png";

export const WebDesign = ({ setExpandedImage }) => {
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

        <img className="principalphoto" alt="principal" src={principalphoto} />

        {/* Líneas */}
        <img className="line" alt="Line" src={line} />
        <img className="img" alt="Line" src={line} />
        <img className="line-2" alt="Line" src={line2} />
        <img className="line-3" alt="Line" src={line} />

        {/* Github */}
        <img className="line-0" alt="Line" src={line} />
        <img className="line-1" alt="Line" src={line} />
        <img className="image-github" alt="Github" src={githubLogo} />
        <div className="text-wrapper-7">Github:</div>
        <div className="text-wrapper-8">marianalarag</div>

        {/* LinkedIn */}
        <div className="text-wrapper-10">LinkedIn:</div>
        <div className="text-wrapper-9">Mariana Lara</div>
        <img className="image-2" alt="Linkedin" src={linkedinImg} />

        {/* Email */}
        <img className="line-6" alt="Line" src={line} />
        <img className="line-7" alt="Line" src={line} />
        <img className="image-30" alt="Email" src={emailImg} />
        <div className="text-wrapper-13">Email:</div>
        <div className="text-wrapper-12">marianalarag@outlook.com</div>

        {/* Phone */}
        <img className="line-4" alt="Line" src={line} />
        <img className="line-5" alt="Line" src={line} />
        <img className="image-31" alt="Phone" src={phoneImg} />
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

        <img className="whatsapp-image-2" alt="About" src={photo2} />

        <img className="line-12" alt="Line" src={line3} />

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

        <div className="hard-skills-container">
          {/* Fila 1 */}
          <div className="hard-skill-row">
            <img className="image-20" alt="Odoo" src={odooImg} />
            <img className="image-22" alt="AWS" src={aws} />
          </div>

          {/* Fila 2 */}
          <div className="hard-skill-row">
            <img className="image-26" alt="HTML" src={htmlImg} />
            <img className="image-21" alt="CSS" src={cssImg} />
          </div>

          {/* Fila 3 */}
          <div className="hard-skill-row">
            <img className="image-29" alt="Dart" src={dartImg} />
            <img className="image-25" alt="React" src={reactImg} />
          </div>

          {/* Fila 4 - Spring y Python */}
          <div className="hard-skill-row">
            <img className="image-spring" alt="Spring" src={springImg} />
            <img className="image-23" alt="Python" src={pythonImg} />
          </div>

          {/* Fila 5 - PHP y Base de Datos */}
          <div className="hard-skill-row">
            <img className="image-28" alt="PHP" src={phpImg} />
            <img className="image-27" alt="Database" src={baseDatosImg} />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          PROJECTS
      ════════════════════════════════ */}
      <div className="projects">
        <ProjectSlider />
      </div>

      {/* ════════════════════════════════
          CERTIFICATES
      ════════════════════════════════ */}
      <div className="certificates">
        <CertificatesCarousel setExpandedImage={setExpandedImage} />
      </div>
    </div>
  );
};
