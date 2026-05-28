import { useState } from "react";
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
];

export const CertificatesCarousel = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState([0, 0, 0]);

  const handleImageClick = (cert) => {
    setExpandedImage(cert);
  };

  const handleCloseModal = () => {
    setExpandedImage(null);
  };

  const handleScroll = (rowIndex, e) => {
    const newPos = [...scrollPosition];
    newPos[rowIndex] = e.currentTarget.scrollLeft;
    setScrollPosition(newPos);
  };

  // Dividir certificados en 3 filas
  const row1 = certificates.slice(0, 4);
  const row2 = certificates.slice(4, 8);
  const row3 = certificates.slice(8, 12);

  const rows = [row1, row2, row3];

  return (
    <div className="certificates-carousel-container">
      {/* Title */}
      <div className="certificates-header">
        <div className="cert-title">CERTIFICATES</div>
      </div>

      {/* 3 Rows */}
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="carousel-row">
          <div
            className={`carousel-track carousel-row-${rowIdx}`}
            onScroll={(e) => handleScroll(rowIdx, e)}
          >
            {row.map((cert) => (
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
      ))}

      {/* Modal expandido */}
      {expandedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};
