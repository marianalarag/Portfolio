import { useState } from "react";
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

const awsCertificates = [
  { id: "cloud-operations", src: cloudOperations, alt: "Cloud Operations" },
  { id: "cloud-foundations", src: awsCloud, alt: "Cloud Foundations" },
  { id: "aws-practitioner", src: awsPractitioner, alt: "AWS Practitioner" },
  { id: "aws-billing", src: awsBilling, alt: "AWS Billing" },
  { id: "aws-job", src: awsJob, alt: "AWS Job" },
  { id: "aws-architected", src: awsArchitected, alt: "AWS Architected" },
];

const ciscoCertificates = [
  { id: "cisco-computer", src: ciscocomputer, alt: "Cisco Computer" },
  { id: "cisco-hardware", src: ciscohardware, alt: "Cisco Hardware" },
  { id: "cisco-networking", src: cisconetworking, alt: "Cisco Networking" },
  { id: "cisco-operations", src: ciscooperations, alt: "Cisco Operations" },
  { id: "cisco-python", src: ciscopython, alt: "Cisco Python" },
];

const soloLearnCertificates = [
  { id: "sololearn-java", src: sololearnjava, alt: "SoloLearn Java" },
  {
    id: "sololearn-python-introduction",
    src: sololearpyhtonintroduction,
    alt: "SoloLearn Python Introduction",
  },
  { id: "sololearn-python-developer", src: sololearnpythondeveloper, alt: "SoloLearn Python Developer" },
];

const ogumCertificates = [
  { id: "ogum-cv", src: ogumcv, alt: "Ogum CV" },
  { id: "ogum-tendencias", src: ogumtendencias, alt: "Ogum Tendencias" },
  { id: "ogum-tiempo", src: ogumtiempo, alt: "Ogum Tiempo" },
];

const certificateGroups = [
  {
    id: "aws",
    title: "AWS",
    subtitle: "6 certificates",
    certificates: awsCertificates,
    accent: "#1a1f33",
    preview: awsCloud,
  },
  {
    id: "cisco",
    title: "Cisco",
    subtitle: "5 certificates",
    certificates: ciscoCertificates,
    accent: "#1a1f33",
    preview: cisconetworking,
  },
  {
    id: "sololearn",
    title: "SoloLearn",
    subtitle: "3 certificates",
    certificates: soloLearnCertificates,
    accent: "#1a1f33",
    preview: sololearnpythondeveloper,
  },
  {
    id: "ogum",
    title: "Ogum",
    subtitle: "3 certificates",
    certificates: ogumCertificates,
    accent: "#1a1f33",
    preview: ogumcv,
  },
];

const soloFeaturedCertificates = [
  { id: "itep", src: itepImg, alt: "ITEP" },
  { id: "azure", src: azureImg, alt: "Azure" },
];

const soloCertificates = [
  { id: "invent-for-the-planet", src: inventfortheplanet, alt: "Invent for the Planet" },
  { id: "java-fundamentals", src: javaFundamentals, alt: "Java Fundamentals" },
  { id: "scrum", src: scrumImg, alt: "Scrum" },
  { id: "ibm", src: ibmImg, alt: "IBM" },
];

const remainingCertificates = [
  ...soloFeaturedCertificates,
  ...soloCertificates,
  {
    id: "cybersecurity-fundamentals",
    src: cybersecurityFundamentals,
    alt: "Fundamentos de Ciberseguridad",
  },
];
const folderColor = "#101729";

const CertificateCard = ({ cert, onClick }) => (
  <div className="certificate-card mb-[clamp(10px,2vw,20px)] inline-block w-full cursor-pointer self-start overflow-hidden rounded-[clamp(10px,2vw,18px)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
    <img
      src={cert.src}
      alt={cert.alt}
      className="block h-auto w-full"
      loading="lazy"
      decoding="async"
      onClick={() => onClick(cert)}
    />
  </div>
);

const FolderCard = ({ group, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(group)}
    className="group mb-[clamp(10px,2vw,20px)] block w-full self-start text-left transition duration-200 hover:-translate-y-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1f33]"
    aria-label={`Open ${group.title} certificates`}
  >
    <span className="relative block aspect-[1.28] w-full">
      <span
        className="absolute left-0 top-[3%] h-[18%] w-[48%] rounded-t-[clamp(10px,2vw,18px)]"
        style={{ backgroundColor: folderColor }}
      />
      <span className="absolute inset-x-0 bottom-0 h-[86%] overflow-hidden rounded-[clamp(10px,2vw,18px)] rounded-tl-none bg-[#101729] shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition duration-200 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
        <img
          src={group.preview}
          alt=""
          className="h-full w-full object-cover opacity-20 grayscale transition duration-200 group-hover:scale-105 group-hover:opacity-28"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute inset-0 flex items-end p-[clamp(10px,2vw,20px)]">
          <span className="block w-full text-[#e2ded5]">
            <span className="block break-words font-fraunces text-[clamp(26px,3.8vw,52px)] leading-none">
              {group.title}
            </span>
            <span className="mt-1 block font-kurale text-[clamp(13px,1.6vw,18px)]">
              {group.subtitle}
            </span>
          </span>
        </span>
      </span>
    </span>
  </button>
);

export const CertificatesCarousel = ({ setExpandedImage }) => {
  const [activeGroup, setActiveGroup] = useState(null);

  const handleImageClick = (cert) => {
    if (setExpandedImage) {
      setExpandedImage(cert);
    }
  };

  const openGroup = (group) => {
    setActiveGroup(group);
  };

  const closeGroup = () => {
    setActiveGroup(null);
  };

  const visibleCertificates = activeGroup?.certificates ?? remainingCertificates;

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#e4e4e4] py-[clamp(22px,3vw,38px)] pb-[clamp(40px,7vw,84px)]">
      <div className="mb-[clamp(24px,4vw,54px)] w-full text-center">
        <div className="px-4 text-center font-fraunces text-[clamp(48px,8vw,132px)] font-normal leading-none text-[#1a1f33]">
          CERTIFICATES
        </div>
      </div>

      {activeGroup ? (
        <div className="mx-auto mb-[clamp(18px,3vw,34px)] flex w-full flex-wrap items-center justify-between gap-3 px-[10px] min-[361px]:px-3 min-[700px]:px-[clamp(18px,2.8vw,52px)]">
          <button
            type="button"
            onClick={closeGroup}
            className="rounded-full bg-[#1a1f33] px-5 py-2 font-kurale text-[14px] text-white transition duration-200 hover:bg-[#2f354d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1f33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e4e4e4]"
          >
            Back to all
          </button>
          <div className="font-kurale text-[clamp(16px,2vw,22px)] text-[#1a1f33]">
            {activeGroup.title} certificates
          </div>
        </div>
      ) : (
        <div className="mx-auto grid w-full grid-cols-2 gap-[10px] px-[10px] min-[361px]:gap-3 min-[361px]:px-3 min-[700px]:grid-cols-4 min-[700px]:gap-[clamp(14px,1.8vw,26px)] min-[700px]:px-[clamp(18px,2.8vw,52px)]">
          {certificateGroups.map((group) => (
            <FolderCard key={group.id} group={group} onClick={openGroup} />
          ))}
          {remainingCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onClick={handleImageClick}
            />
          ))}
        </div>
      )}

      {activeGroup ? (
        <div className="mx-auto grid w-full grid-cols-2 gap-[10px] px-[10px] min-[361px]:gap-3 min-[361px]:px-3 min-[700px]:grid-cols-3 min-[700px]:gap-[clamp(14px,1.8vw,26px)] min-[700px]:px-[clamp(18px,2.8vw,52px)] min-[1200px]:grid-cols-4">
          {visibleCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onClick={handleImageClick}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
