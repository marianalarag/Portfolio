import { useMemo, useRef, useState } from "react";

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
import cloudOperations from "./img/Cloud Operations.jpg";
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
import cybersecurityFundamentals from "./img/Fundamentos ciberseguridad.jpg";

const addCategory = (certificates, category) =>
  certificates.map((certificate) => ({ ...certificate, category }));

const awsCertificates = addCategory(
  [
    { id: "cloud-operations", src: cloudOperations, alt: "Cloud Operations" },
    { id: "cloud-foundations", src: awsCloud, alt: "Cloud Foundations" },
    { id: "aws-practitioner", src: awsPractitioner, alt: "AWS Practitioner" },
    { id: "aws-billing", src: awsBilling, alt: "AWS Billing" },
    { id: "aws-job", src: awsJob, alt: "AWS Job" },
    { id: "aws-architected", src: awsArchitected, alt: "AWS Architected" },
  ],
  "Amazon Web Services",
);

const ciscoCertificates = addCategory(
  [
    { id: "cisco-computer", src: ciscocomputer, alt: "Cisco Computer" },
    { id: "cisco-hardware", src: ciscohardware, alt: "Cisco Hardware" },
    { id: "cisco-networking", src: cisconetworking, alt: "Cisco Networking" },
    { id: "cisco-operations", src: ciscooperations, alt: "Cisco Operations" },
    { id: "cisco-python", src: ciscopython, alt: "Cisco Python" },
  ],
  "Cisco",
);

const soloLearnCertificates = addCategory(
  [
    { id: "sololearn-java", src: sololearnjava, alt: "SoloLearn Java" },
    {
      id: "sololearn-python-introduction",
      src: sololearpyhtonintroduction,
      alt: "SoloLearn Python Introduction",
    },
    {
      id: "sololearn-python-developer",
      src: sololearnpythondeveloper,
      alt: "SoloLearn Python Developer",
    },
  ],
  "SoloLearn",
);

const ogumCertificates = addCategory(
  [
    { id: "ogum-cv", src: ogumcv, alt: "Ogum CV" },
    { id: "ogum-tendencias", src: ogumtendencias, alt: "Ogum Tendencias" },
    { id: "ogum-tiempo", src: ogumtiempo, alt: "Ogum Tiempo" },
  ],
  "Ogum",
);

const additionalCertificates = addCategory(
  [
    { id: "itep", src: itepImg, alt: "ITEP" },
    { id: "azure", src: azureImg, alt: "Azure" },
    { id: "invent-for-the-planet", src: inventfortheplanet, alt: "Invent for the Planet" },
    { id: "java-fundamentals", src: javaFundamentals, alt: "Java Fundamentals" },
    { id: "scrum", src: scrumImg, alt: "Scrum" },
    { id: "ibm", src: ibmImg, alt: "IBM" },
    {
      id: "cybersecurity-fundamentals",
      src: cybersecurityFundamentals,
      alt: "Fundamentos de Ciberseguridad",
    },
  ],
  "Additional certificates",
);

const certificates = [
  ...awsCertificates,
  ...ciscoCertificates,
  ...soloLearnCertificates,
  ...ogumCertificates,
  ...additionalCertificates,
];

const certificateGroups = [
  {
    id: "aws",
    title: "AWS",
    subtitle: "6 certificates",
    certificates: awsCertificates,
    preview: awsCloud,
  },
  {
    id: "cisco",
    title: "Cisco",
    subtitle: "5 certificates",
    certificates: ciscoCertificates,
    preview: cisconetworking,
  },
  {
    id: "sololearn",
    title: "SoloLearn",
    subtitle: "3 certificates",
    certificates: soloLearnCertificates,
    preview: sololearnpythondeveloper,
  },
  {
    id: "ogum",
    title: "Ogum",
    subtitle: "3 certificates",
    certificates: ogumCertificates,
    preview: ogumcv,
  },
];

const views = [
  { id: "traditional", label: "Traditional view", icon: "grid" },
  { id: "stacked", label: "Stacked view", icon: "stack" },
];

const getRelativeIndex = (index, activeIndex) =>
  (index - activeIndex + certificates.length) % certificates.length;

const CertificateIcon = ({ type }) => {
  if (type === "stack") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 8 8-4 8 4-8 4-8-4Z" />
        <path d="m4 12 8 4 8-4M4 16l8 4 8-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  );
};

const CertificateCard = ({ certificate, index, activeIndex, onSelect, onOpen }) => {
  const relativeIndex = getRelativeIndex(index, activeIndex);
  const isActive = relativeIndex === 0;

  return (
    <button
      type="button"
      className={`certificate-experience__card ${isActive ? "is-active" : ""}`}
      style={{
        "--relative-index": relativeIndex,
      }}
      onClick={() => (isActive ? onOpen(certificate) : onSelect(index))}
      aria-label={isActive ? `Open ${certificate.alt}` : `Select ${certificate.alt}`}
    >
      <span className="certificate-experience__card-inner">
        <img src={certificate.src} alt={certificate.alt} loading="lazy" decoding="async" />
        <span className="certificate-experience__card-shine" aria-hidden="true" />
      </span>
    </button>
  );
};

const TraditionalCertificateCard = ({ certificate, onOpen }) => (
  <button
    type="button"
    className="certificate-experience__traditional-card"
    onClick={() => onOpen(certificate)}
    aria-label={`Open ${certificate.alt}`}
  >
    <img src={certificate.src} alt={certificate.alt} loading="lazy" decoding="async" />
  </button>
);

const TraditionalFolderCard = ({ group, onOpen }) => (
  <button
    type="button"
    className="certificate-experience__folder"
    onClick={() => onOpen(group)}
    aria-label={`Open ${group.title} certificates`}
  >
    <span className="certificate-experience__folder-tab" />
    <span className="certificate-experience__folder-body">
      <img src={group.preview} alt="" loading="lazy" decoding="async" />
      <span className="certificate-experience__folder-copy">
        <strong>{group.title}</strong>
        <small>{group.subtitle}</small>
      </span>
    </span>
  </button>
);

export const CertificatesCarousel = ({ setExpandedImage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("traditional");
  const [activeGroup, setActiveGroup] = useState(null);
  const pointerStartRef = useRef(null);

  const activeCertificate = useMemo(() => certificates[activeIndex], [activeIndex]);

  const moveActive = (amount) => {
    setActiveIndex((current) => (current + amount + certificates.length) % certificates.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveActive(-1);
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveActive(1);
    }
  };

  const openCertificate = (certificate) => {
    if (setExpandedImage) setExpandedImage(certificate);
  };

  const openGroup = (group) => setActiveGroup(group);
  const closeGroup = () => setActiveGroup(null);

  const handleGalleryPointerDown = (event) => {
    pointerStartRef.current = event.clientX;
  };

  const handleGalleryPointerUp = (event) => {
    if (pointerStartRef.current === null) return;
    const distance = event.clientX - pointerStartRef.current;
    pointerStartRef.current = null;
    if (Math.abs(distance) < 28) return;
    moveActive(distance < 0 ? 1 : -1);
  };

  return (
    <section className="certificate-experience" onKeyDown={handleKeyDown} tabIndex={-1}>
      <aside className="certificate-experience__sidebar">
        <p className="certificate-experience__eyebrow">Portfolio archive</p>
        <h2>Certificates</h2>
        <p className="certificate-experience__description">
          A collection of courses, certifications and learning experiences gathered along the way.
        </p>

        <div className="certificate-experience__rule" />
        <p className="certificate-experience__label">Select perspective</p>

        <div className="certificate-experience__views" aria-label="Certificate views">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              className={viewMode === view.id ? "is-selected" : ""}
              onClick={() => {
                setViewMode(view.id);
                if (view.id !== "traditional") closeGroup();
              }}
              aria-pressed={viewMode === view.id}
            >
              <CertificateIcon type={view.icon} />
              <span>{view.label}</span>
            </button>
          ))}
        </div>

        <p className="certificate-experience__footer">© 2026 · Mariana Lara portfolio</p>
      </aside>

      <div
        className={`certificate-experience__gallery view-${viewMode}`}
        onPointerDown={handleGalleryPointerDown}
        onPointerUp={handleGalleryPointerUp}
        onPointerCancel={() => {
          pointerStartRef.current = null;
        }}
      >
        {viewMode === "traditional" ? (
          <div className="certificate-experience__traditional-content" aria-live="polite">
            {activeGroup && (
              <div className="certificate-experience__traditional-header">
                <button type="button" onClick={closeGroup}>
                  &larr; Back to all
                </button>
                <span>{activeGroup.title} certificates</span>
              </div>
            )}
            <div className="certificate-experience__traditional-grid">
              {activeGroup
                ? activeGroup.certificates.map((certificate) => (
                    <TraditionalCertificateCard
                      key={certificate.id}
                      certificate={certificate}
                      onOpen={openCertificate}
                    />
                  ))
                : [
                    ...certificateGroups.map((group) => (
                      <TraditionalFolderCard key={group.id} group={group} onOpen={openGroup} />
                    )),
                    ...additionalCertificates.map((certificate) => (
                      <TraditionalCertificateCard
                        key={certificate.id}
                        certificate={certificate}
                        onOpen={openCertificate}
                      />
                    )),
                  ]}
            </div>
          </div>
        ) : (
          <div className="certificate-experience__deck" aria-live="polite">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                onOpen={openCertificate}
              />
            ))}
          </div>
        )}

        {viewMode === "stacked" && (
          <>
            <div className="certificate-experience__caption">
              <strong>{activeCertificate.alt}</strong>
              <span>{activeCertificate.category}</span>
              <small>
                {String(activeIndex + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}
              </small>
            </div>

            <div className="certificate-experience__navigation" aria-label="Navigate certificates">
              <button type="button" onClick={() => moveActive(-1)} aria-label="Previous certificate">
                &larr;
              </button>
              <button type="button" onClick={() => moveActive(1)} aria-label="Next certificate">
                &rarr;
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
