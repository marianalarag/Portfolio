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

      <div className="mx-auto w-full columns-2 gap-[10px] px-[10px] min-[361px]:gap-3 min-[361px]:px-3 min-[700px]:columns-3 min-[700px]:gap-[clamp(14px,1.8vw,26px)] min-[700px]:px-[clamp(18px,2.8vw,52px)] min-[1200px]:columns-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="mb-[clamp(10px,2vw,20px)] inline-block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-[clamp(10px,2vw,18px)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
              onClick={() => handleImageClick(cert)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
