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

const featuredCertificates = [
  { id: "itep", src: itepImg, alt: "ITEP" },
  { id: "cloud-operations", src: cloudOperations, alt: "Cloud Operations" },
  { id: "cloud-foundations", src: awsCloud, alt: "Cloud Foundations" },
  { id: "azure", src: azureImg, alt: "Azure" },
];

const certificates = [
  { id: "invent-for-the-planet", src: inventfortheplanet, alt: "Invent for the Planet" },
  { id: "aws-practitioner", src: awsPractitioner, alt: "AWS Practitioner" },
  { id: "aws-billing", src: awsBilling, alt: "AWS Billing" },
  { id: "aws-job", src: awsJob, alt: "AWS Job" },
  { id: "aws-architected", src: awsArchitected, alt: "AWS Architected" },
  { id: "java-fundamentals", src: javaFundamentals, alt: "Java Fundamentals" },
  { id: "scrum", src: scrumImg, alt: "Scrum" },
  { id: "ibm", src: ibmImg, alt: "IBM" },
  { id: "sololearn-java", src: sololearnjava, alt: "SoloLearn Java" },
  {
    id: "sololearn-python-introduction",
    src: sololearpyhtonintroduction,
    alt: "SoloLearn Python Introduction",
  },
  { id: "sololearn-python-developer", src: sololearnpythondeveloper, alt: "SoloLearn Python Developer" },
  { id: "ogum-cv", src: ogumcv, alt: "Ogum CV" },
  { id: "ogum-tendencias", src: ogumtendencias, alt: "Ogum Tendencias" },
  { id: "ogum-tiempo", src: ogumtiempo, alt: "Ogum Tiempo" },
  { id: "cisco-computer", src: ciscocomputer, alt: "Cisco Computer" },
  { id: "cisco-hardware", src: ciscohardware, alt: "Cisco Hardware" },
  { id: "cisco-networking", src: cisconetworking, alt: "Cisco Networking" },
  { id: "cisco-operations", src: ciscooperations, alt: "Cisco Operations" },
  { id: "cisco-python", src: ciscopython, alt: "Cisco Python" },
];

const CertificateCard = ({ cert, onClick }) => (
  <div className="certificate-card mb-[clamp(10px,2vw,20px)] inline-block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-[clamp(10px,2vw,18px)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
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

export const CertificatesCarousel = ({ setExpandedImage }) => {
  const handleImageClick = (cert) => {
    if (setExpandedImage) {
      setExpandedImage(cert);
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#e4e4e4] py-[clamp(22px,3vw,38px)] pb-[clamp(40px,7vw,84px)]">
      <div className="mb-[clamp(24px,4vw,54px)] w-full text-center">
        <div className="px-4 text-center font-fraunces text-[clamp(48px,8vw,132px)] font-normal leading-none text-[#1a1f33]">
          CERTIFICATES
        </div>
      </div>

      <div className="mx-auto grid w-full grid-cols-2 gap-[10px] px-[10px] min-[361px]:gap-3 min-[361px]:px-3 min-[700px]:grid-cols-4 min-[700px]:gap-[clamp(14px,1.8vw,26px)] min-[700px]:px-[clamp(18px,2.8vw,52px)]">
        {featuredCertificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onClick={handleImageClick}
          />
        ))}
      </div>

      <div className="mx-auto mt-[clamp(0px,0.8vw,10px)] w-full columns-2 gap-[10px] px-[10px] min-[361px]:gap-3 min-[361px]:px-3 min-[700px]:columns-3 min-[700px]:gap-[clamp(14px,1.8vw,26px)] min-[700px]:px-[clamp(18px,2.8vw,52px)] min-[1200px]:columns-4">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onClick={handleImageClick}
          />
        ))}
      </div>
    </div>
  );
};
