import "./certificates-carousel.css";

import awsCloud from "./img/aws cloud.jpg";
import awsPractitioner from "./img/aws cloud practicioner.jpg";
import awsBilling from "./img/aws billing.jpg";
import javaFundamentals from "./img/java fundamentals.png";
import itepImg from "./img/ITEP.jpg";
import scrumImg from "./img/scrum.jpg";
import ibmImg from "./img/ibm.jpg";
import azureImg from "./img/azure.jpg";
import awsJob from "./img/aws job.jpg";
import awsArchitected from "./img/aws architected.jpg";
import sololearnjava from "./img/sololearn java.jpg";
import sololearnpythondeveloper from "./img/sololearn python developer.jpg";
import sololearpyhtonintroduction from "./img/sololearn python introduction.jpg";
import inventfortheplanet from "./img/Invent for the planet.png";
import ogumcv from "./img/ogum cv.png";
import ogumtendencias from "./img/ogum tendencias.png";
import ogumtiempo from "./img/ogum tiempo.png";
import ciscocomputer from "./img/cisco computer.png";
import ciscohardware from "./img/cisco hardware.png";
import cisconetworking from "./img/cisco networking.png";
import ciscooperations from "./img/cisco operating.png";
import ciscopython from "./img/cisco python.png";

const certificates = [
  { id: 1, src: awsCloud, alt: "AWS Cloud" },
  { id: 2, src: azureImg, alt: "Azure" },
  { id: 3, src: awsPractitioner, alt: "AWS Practitioner" },
  { id: 4, src: awsBilling, alt: "AWS Billing" },
  { id: 5, src: awsJob, alt: "AWS Job" },
  { id: 6, src: awsArchitected, alt: "AWS Architected" },
  { id: 7, src: javaFundamentals, alt: "Java Fundamentals" },
  { id: 8, src: scrumImg, alt: "Scrum" },
  { id: 9, src: itepImg, alt: "ITEP" },
  { id: 10, src: inventfortheplanet, alt: "Invent for the Planet" },
  { id: 11, src: ibmImg, alt: "IBM" },
  { id: 12, src: sololearnjava, alt: "SoloLearn Java" },

  {
    id: 13,
    src: sololearpyhtonintroduction,
    alt: "SoloLearn Python Introduction",
  },
  { id: 14, src: sololearnpythondeveloper, alt: "SoloLearn Python Developer" },

  { id: 15, src: ogumcv, alt: "Ogum CV" },
  { id: 16, src: ogumtendencias, alt: "Ogum Tendencias" },
  { id: 17, src: ogumtiempo, alt: "Ogum Tiempo" },
  { id: 18, src: ciscocomputer, alt: "Cisco Computer" },
  { id: 19, src: ciscohardware, alt: "Cisco Hardware" },
  { id: 20, src: cisconetworking, alt: "Cisco Networking" },
  { id: 21, src: ciscooperations, alt: "Cisco Operations" },
  { id: 22, src: ciscopython, alt: "Cisco Python" },
];

// Dividir en 4 FILAS de 6 imágenes cada una (la última con 4)
const row1 = certificates.slice(0, 6); // ids 1-6
const row2 = certificates.slice(6, 12); // ids 7-12
const row3 = certificates.slice(12, 17); // ids 13-18
const row4 = certificates.slice(17, 22); // ids 19-22

export const CertificatesCarousel = ({ setExpandedImage }) => {
  const handleImageClick = (cert) => {
    if (setExpandedImage) {
      setExpandedImage(cert);
    }
  };

  return (
    <div className="certificates-carousel-container">
      <div className="certificates-header">
        <div className="cert-title">CERTIFICATES</div>
      </div>

      {/* Fila 1 */}
      <div className="carousel-row">
        <div className="carousel-track track-1">
          {row1.map((cert) => (
            <div key={cert.id} className="carousel-item">
              <img
                src={cert.src}
                alt={cert.alt}
                className="cert-image"
                onClick={() => handleImageClick(cert)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fila 2 */}
      <div className="carousel-row">
        <div className="carousel-track track-2">
          {row2.map((cert) => (
            <div key={cert.id} className="carousel-item">
              <img
                src={cert.src}
                alt={cert.alt}
                className="cert-image"
                onClick={() => handleImageClick(cert)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fila 3 */}
      <div className="carousel-row">
        <div className="carousel-track track-3">
          {row3.map((cert) => (
            <div key={cert.id} className="carousel-item">
              <img
                src={cert.src}
                alt={cert.alt}
                className="cert-image"
                onClick={() => handleImageClick(cert)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fila 4 */}
      <div className="carousel-row">
        <div className="carousel-track track-4">
          {row4.map((cert) => (
            <div key={cert.id} className="carousel-item">
              <img
                src={cert.src}
                alt={cert.alt}
                className="cert-image"
                onClick={() => handleImageClick(cert)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
