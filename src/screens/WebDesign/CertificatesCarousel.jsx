import "./certificates-carousel.css";

import awsCloud from "./img/aws cloud.jpg";
import awsPractitioner from "./img/aws cloud practicioner.jpg";
import awsBilling from "./img/aws billing.jpg";
import javaFundamentals from "./img/java fundamentals.jpg";
import itepImg from "./img/ITEP.jpg";
import scrumImg from "./img/scrum.jpg";
import ibmImg from "./img/ibm.jpg";
import azureImg from "./img/azure.jpg";
import awsJob from "./img/aws job.jpg";
import awsArchitected from "./img/aws architected.jpg";
import amazonImg from "./img/amazon.png";
import odooImg from "./img/odoo.png";

const certificates = [
  { id: 1, src: awsCloud, alt: "AWS Cloud" },
  { id: 2, src: awsPractitioner, alt: "AWS Practitioner" },
  { id: 3, src: awsBilling, alt: "AWS Billing" },
  { id: 4, src: javaFundamentals, alt: "Java Fundamentals" },
  { id: 5, src: itepImg, alt: "ITEP" },
  { id: 6, src: scrumImg, alt: "Scrum" },
  { id: 7, src: ibmImg, alt: "IBM" },
  { id: 8, src: azureImg, alt: "Azure" },
  { id: 9, src: awsJob, alt: "AWS Job" },
  { id: 10, src: awsArchitected, alt: "AWS Architected" },
  { id: 11, src: amazonImg, alt: "Amazon" },
  { id: 12, src: odooImg, alt: "Odoo" },
  // Duplicados para el bouncing
  { id: 13, src: awsCloud, alt: "AWS Cloud 2" },
  { id: 14, src: awsPractitioner, alt: "AWS Practitioner 2" },
  { id: 15, src: awsBilling, alt: "AWS Billing 2" },
  { id: 16, src: javaFundamentals, alt: "Java Fundamentals 2" },
  { id: 17, src: itepImg, alt: "ITEP 2" },
  { id: 18, src: scrumImg, alt: "Scrum 2" },
  { id: 19, src: ibmImg, alt: "IBM 2" },
  { id: 20, src: azureImg, alt: "Azure 2" },
  { id: 21, src: awsJob, alt: "AWS Job 2" },
  { id: 22, src: awsArchitected, alt: "AWS Architected 2" },
  { id: 23, src: amazonImg, alt: "Amazon 2" },
  { id: 24, src: odooImg, alt: "Odoo 2" },
];

// Dividir en 3 filas
const row1 = certificates.slice(0, 8);
const row2 = certificates.slice(8, 16);
const row3 = certificates.slice(16, 24);

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
    </div>
  );
};
