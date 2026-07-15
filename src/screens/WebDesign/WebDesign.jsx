import { CertificatesCarousel } from "./CertificatesCarousel";
import { ProjectSlider } from "./ProjectSlider";
import { ResponsiveStage } from "../../components/ResponsiveStage";
import line from "./img/Line.png";
import htmlImg from "./img/html.png";
import githubLogo from "./img/github logo.png";
import emailImg from "./img/email.png";
import phoneImg from "./img/phone.png";
import cssImg from "./img/css.png";
import linkedinImg from "./img/linkedin.png";
import baseDatosImg from "./img/base datos.png";
import pythonImg from "./img/python.png";
import reactImg from "./img/react.png";
import dartImg from "./img/dart.png";
import phpImg from "./img/php.png";
import odooImg from "./img/odoo.png";
import aws from "./img/amazon.png";
import springImg from "./img/spring.png";
import principalphoto from "./img/photo 1.png";
import photoLeft from "./img/foto 1.png";
import photoRight from "./img/foto 2.png";

const contacts = [
  {
    label: "Github",
    value: "marianalarag",
    href: "https://github.com/marianalarag",
    icon: githubLogo,
    position: "left-[3%] bottom-[54%] lg:left-[5%] lg:bottom-0",
  },
  {
    label: "LinkedIn",
    value: "Mariana Lara",
    href: "https://www.linkedin.com/in/marianalarag/",
    icon: linkedinImg,
    position: "left-[3%] bottom-0 lg:left-[22%] lg:bottom-0",
  },
  {
    label: "Email",
    value: "marianalarag@outlook.com",
    href: "mailto:marianalarag@outlook.com",
    icon: emailImg,
    position:
      "right-[3%] bottom-[54%] text-right lg:right-auto lg:left-[64%] lg:bottom-0 lg:text-left",
    align: "right",
  },
  {
    label: "Phone",
    value: "+52 (999) 104 7545",
    href: "https://wa.me/529991047545",
    icon: phoneImg,
    position:
      "right-[3%] bottom-0 text-right lg:right-auto lg:left-[78.5%] lg:bottom-0 lg:text-left",
    align: "right",
  },
];

const skills = [
  [odooImg, "Odoo"],
  [aws, "AWS"],
  [htmlImg, "HTML"],
  [cssImg, "CSS"],
  [dartImg, "Dart"],
  [reactImg, "React"],
  [springImg, "Spring"],
  [pythonImg, "Python"],
  [phpImg, "PHP"],
  [baseDatosImg, "Database"],
];

const desktopSkillRows = [
  [
    [odooImg, "Odoo"],
    [htmlImg, "HTML"],
    [dartImg, "Dart"],
    [springImg, "Spring"],
    [phpImg, "PHP"],
  ],
  [
    [aws, "AWS"],
    [cssImg, "CSS"],
    [reactImg, "React"],
    [pythonImg, "Python"],
    [baseDatosImg, "Database"],
  ],
];

export const WebDesign = ({ setExpandedImage }) => (
  <main className="w-full overflow-hidden bg-[#e4e4e4] text-[#1a1f33]">
    <section className="relative isolate h-[100svh] min-h-[34rem] overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#1a1f33_0%,#4d4e5d_65%,#686875_100%)] px-[5%] pt-[3%] text-[#e2ded5] [container-type:inline-size] lg:min-h-[650px] lg:px-[4%] lg:pt-[2.2%]">
      <h1 className="absolute inset-x-0 top-[10.5%] z-10 text-center font-fraunces text-[clamp(4.2rem,17cqw,7rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#c1bfbc] [text-shadow:0_4px_4px_#0005] sm:top-[8%] lg:relative lg:top-auto lg:z-20 lg:text-[10.2cqw]">
        PORTFOLIO
      </h1>

      <p className="absolute left-[5.3%] top-[28.6%] z-20 w-[31%] font-fraunces text-[clamp(0.95rem,4.2cqw,1.35rem)] font-normal leading-[1.08] text-[#e2ded5] [text-shadow:0_4px_4px_#00000040] sm:left-[6.39%] sm:top-[25.4%] sm:text-[clamp(0.95rem,2.43cqw,2.2rem)] lg:w-[28.125%]">
        SOFTWARE
        <br />
        DEVELOPMENT
        <br />
        STUDENT
      </p>

      <div className="absolute right-[5%] top-[22.6%] z-20 w-[33%] text-right text-[#c1bfbc] sm:right-[4%] sm:top-[24%] sm:w-[44%] lg:right-[2.7%] lg:top-[25.5%] lg:w-[22.7%]">
        <p className="leading-[0.8] [text-shadow:0_4px_4px_#0005]">
          <span className="font-great-vibes text-[clamp(1.6rem,8cqw,3.6rem)] lg:text-[4.2cqw]">
            M
          </span>
          <span className="font-quintessential text-[clamp(1rem,5.2cqw,2.6rem)] lg:text-[3.5cqw]">
            ARIANA
          </span>
          <span className="mt-[5%] block">
            <span className="font-great-vibes text-[clamp(1.8rem,9cqw,4rem)] lg:text-[5.3cqw]">
              L
            </span>
            <span className="font-quintessential text-[clamp(0.95rem,5cqw,2.2rem)] lg:text-[3cqw]">
              ARA
            </span>
          </span>
        </p>
      </div>

      <p className="absolute right-[5.5%] top-[31.8%] z-20 w-[15%] text-right font-kurale text-[clamp(0.58rem,2.5cqw,0.86rem)] font-normal leading-normal text-[#dfdede] sm:left-[74.65%] sm:right-auto sm:top-[48.37%] sm:w-[22.64%] sm:text-[clamp(0.58rem,1.39cqw,1.4rem)]">
        Passionate about Frontend Development &amp; Cloud Computing. I build
        intuitive interfaces and scalable solutions - turning ideas into working
        software.
      </p>

      <div
        aria-hidden="true"
        className="ellipse pointer-events-none absolute left-1/2 top-[66%] z-0 h-[68%] w-[105%] -translate-x-1/2 rounded-[50%] bg-[#c7c5ca]/15"
      />

      <img
        src={principalphoto}
        alt="Mariana Lara"
        className="pointer-events-none absolute bottom-0 left-1/2 z-30 h-[100%] w-[90vw] max-w-none -translate-x-1/2 object-contain object-bottom sm:h-[86%] sm:w-[62vw] md:w-[52vw] lg:h-[88%] lg:w-[42%]"
      />

      <div className="absolute inset-x-0 bottom-[1.8%] z-40 h-[6.2rem] sm:bottom-[2.5%] sm:h-[5.5rem] lg:h-auto">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            title={`${contact.label}: ${contact.value}`}
            aria-label={`${contact.label}: ${contact.value}`}
            className={`group absolute w-[28%] min-w-0 origin-left cursor-pointer text-[0.46rem] text-white transition-[transform,color] duration-200 ease-out hover:scale-105 hover:text-[#1a1f33] focus-visible:scale-105 focus-visible:text-[#1a1f33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1bfbc] sm:w-[24%] sm:text-[0.55rem] lg:w-[12%] lg:text-[0.72cqw] ${contact.position}`}
          >
            <span
              className={`flex items-center gap-2 ${
                contact.align === "right" ? "justify-end lg:justify-start" : ""
              }`}
            >
              <img
                src={contact.icon}
                alt=""
                className="h-4 w-4 object-contain brightness-0 invert transition-[transform,filter] duration-200 group-hover:scale-110 group-hover:[filter:brightness(0)_saturate(100%)_invert(11%)_sepia(18%)_saturate(1170%)_hue-rotate(190deg)_brightness(93%)_contrast(91%)] group-focus-visible:scale-110 group-focus-visible:[filter:brightness(0)_saturate(100%)_invert(11%)_sepia(18%)_saturate(1170%)_hue-rotate(190deg)_brightness(93%)_contrast(91%)]"
              />
              <span>{contact.label}</span>
            </span>
            <span className="mt-1 block truncate">{contact.value}</span>
            <span
              className={`relative mt-1 block h-1 w-full ${
                contact.align === "right" ? "ml-auto lg:ml-0" : ""
              }`}
            >
              <img
                src={line}
                alt=""
                className={`absolute top-1/2 h-px w-[70%] -translate-y-1/2 object-fill opacity-70 sm:w-full ${
                  contact.align === "right"
                    ? "right-0 lg:left-0 lg:right-auto"
                    : "left-0"
                }`}
              />
              <img
                src={line}
                alt=""
                className={`absolute top-0 h-1 w-[40.42%] object-fill ${
                  contact.align === "right"
                    ? "right-0 lg:left-0 lg:right-auto"
                    : "left-0"
                }`}
              />
            </span>
          </a>
        ))}
      </div>
    </section>

    <section className="relative z-20 h-[100svh] min-h-[34rem] w-full overflow-visible bg-[#e7e1d599] text-[#10172d] sm:hidden">
      <div className="pointer-events-none absolute left-[-6.3rem] top-[7.5rem] z-0 w-[15rem] rotate-[-90deg] text-right font-fraunces text-[2rem] font-normal leading-none text-[#c1bfbc] [text-shadow:0_4px_4px_#00000040] sm:text-[4.8rem]">
        MARIANA
      </div>

      <h2 className="absolute left-[32%] top-[2.2%] z-30 w-[64%] text-center font-pinyon text-[4.25rem] font-normal leading-none max-[380px]:text-[3.55rem]">
        About me
      </h2>

      <img
        src={photoLeft}
        alt="Mariana Lara"
        className="pointer-events-none absolute left-[-5%] top-[6%] z-10 h-[45%] w-auto max-w-none object-contain min-[480px]:max-[639px]:left-[-2%] min-[480px]:max-[639px]:top-[8%]"
      />

      <div className="absolute left-[40%] right-[6%] top-[12%] z-20 space-y-[1.7rem] text-right font-kurale text-[0.68rem] leading-[1.22] max-[380px]:text-[0.68rem]">
        <p>
          I&apos;m a highly motivated software development student with a strong
          passion for innovation. Currently pursuing a career in software
          development at Tecnológico de Software (2024&ndash;2028).
        </p>
        <p>
          I&apos;m especially passionate about frontend development and cloud
          computing &mdash; I enjoy creating intuitive user interfaces and
          building scalable cloud-based solutions.
        </p>
        <p>
          With a solid sense of responsibility, strong time management, and
          quick learning skills, I approach challenges with perseverance,
          adaptability, and a growth mindset.
        </p>
      </div>

      <div className="absolute left-[10%] top-[52%] z-30 w-[42%] text-center">
        <h3 className="font-pinyon text-[2rem] font-normal leading-none max-[380px]:text-[2.45rem]">
          Languages
        </h3>
      </div>

      <div className="absolute left-[7%] top-[58.6%] z-30 grid w-[51%] grid-cols-2 gap-x-[1rem] text-center font-kurale text-[0.75rem] leading-tight max-[380px]:text-[0.72rem]">
        <span>English B2</span>
        <span>Spanish Native</span>
      </div>

      <div className="absolute left-[3%] top-[64%] z-30">
        <h3 className="font-pinyon text-[2rem] font-normal leading-none max-[380px]:text-[2.15rem]">
          Tools
        </h3>
        <p className="mt-[1.1rem] font-kurale text-[0.75rem] leading-[1.35] max-[380px]:text-[0.72rem]">
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
        </p>
      </div>

      <div className="absolute left-[25%] top-[63.6%] z-30 w-[38%] text-center font-pinyon text-[2rem] font-normal leading-none max-[380px]:text-[2rem]">
        Hard Skills
      </div>

      <div className="absolute left-[35%] top-[68.8%] z-30 grid w-[6.1rem] grid-cols-2 gap-x-[0rem] gap-y-[0.50rem] max-[380px]:w-[6rem] max-[380px]:gap-x-[1.05rem]">
        {skills.map(([src, alt]) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="h-[1.3rem] w-[1.55rem] object-contain max-[380px]:h-[1.25rem] max-[380px]:w-[1.25rem]"
          />
        ))}
      </div>

      <img
        src={photoRight}
        alt="Mariana Lara"
        className="pointer-events-none absolute right-[-13%] top-[45%] z-10 h-[60%] w-auto max-w-none object-contain min-[480px]:max-[639px]:right-[-1%] min-[480px]:max-[639px]:top-[45%]"
      />

      <div className="pointer-events-none absolute bottom-[-0.5%] left-[15%] z-0 w-[52%] text-right font-fraunces text-[3.2rem] font-normal leading-none text-[#c1bfbc] [text-shadow:0_4px_4px_#00000040] max-[380px]:text-[4rem]">
        LARA
      </div>
    </section>

    <section className="relative z-20 hidden w-full overflow-visible bg-[#e7e1d599] sm:block">
      <ResponsiveStage
        width={1440}
        height={700}
        className="relative z-10 overflow-visible"
        contentClassName="overflow-visible"
      >
        <div className="absolute left-[-52px] top-0 h-[700px] w-[1532px] overflow-visible text-[#10172d]">
          <div className="pointer-events-none absolute left-[-195px] top-[255px] w-[560px] rotate-[-90deg] text-right font-fraunces text-[90px] font-normal leading-normal text-[#c1bfbc] [text-shadow:0_4px_4px_#00000040]">
            MARIANA
          </div>

          <h2 className="absolute left-[285px] top-[35px] z-20 w-[560px] text-center font-pinyon text-[120px] font-normal leading-none text-[#10172d]">
            About me
          </h2>

          <img
            src={photoLeft}
            alt="Mariana Lara"
            className="pointer-events-none absolute left-[52px] top-[25px] z-10 h-[765px] w-[440px] max-w-none"
          />

          <>
            <p className="absolute left-[425px] top-[174px] z-20 w-[360px] text-right font-kurale text-[18px] font-normal leading-normal text-[#1a1f33]">
              I&apos;m a highly motivated software development student with a
              strong passion for innovation. Currently pursuing a career in
              software development at Tecnológico de Software (2024&ndash;2028).
            </p>
            <p className="absolute left-[448px] top-[335px] z-20 w-[337px] text-right font-kurale text-[18px] font-normal leading-normal text-[#1a1f33]">
              I&apos;m especially passionate about frontend development and
              cloud computing &mdash; I enjoy creating intuitive user interfaces
              and building scalable cloud-based solutions.
            </p>
            <p className="absolute left-[488px] top-[490px] z-20 w-[297px] text-right font-kurale text-[18px] font-normal leading-normal text-[#1a1f33]">
              With a solid sense of responsibility, strong time management, and
              quick learning skills, I approach challenges with perseverance,
              adaptability, and a growth mindset.
            </p>
          </>

          <img
            src={photoRight}
            alt="Mariana Lara"
            className="pointer-events-none absolute left-[700px] top-[-40px] z-10 h-[780px] w-[500px] max-w-none lg:left-[700px] lg:top-[-40px] lg:h-[780px] lg:w-[500px] max-[480px]:right-[-25%] max-[480px]:top-[45%] max-[480px]:h-[35%] max-[480px]:left-auto"
          />

          <div className="absolute left-[1118px] top-[24px] z-20 w-[300px] text-center text-[#10172d]">
            <h3 className="font-pinyon text-[72px] font-normal leading-none">
              Languages
            </h3>

            <p className="mt-[20px] font-kurale text-[18px] leading-[1.45]">
              English B2
              <br />
              Spanish Native
            </p>

            <h3 className="mt-[28px] font-pinyon text-[70px] font-normal leading-none">
              Tools
            </h3>

            <div className="mt-[30px] grid grid-cols-2 gap-x-[58px] font-kurale text-[18px] leading-[1.45]">
              <p>
                VS Code
                <br />
                JetBrains
                <br />
                Environment
              </p>
              <p>
                Git
                <br />
                Figma
                <br />
                Notion
              </p>
            </div>

            <h3 className="mt-[42px] font-pinyon text-[58px] font-normal leading-none">
              Hard Skills
            </h3>

            <div className="mx-auto mt-[28px] flex w-[250px] flex-col gap-[14px]">
              {desktopSkillRows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 items-center justify-items-center gap-x-[16px]"
                >
                  {row.map(([src, alt]) => (
                    <img
                      key={alt}
                      src={src}
                      alt={alt}
                      className="h-[31px] w-[31px] object-contain"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute left-[1130px] top-[610px] z-0 w-[320px] text-right font-fraunces text-[92px] font-normal leading-none text-[#c1bfbc] [text-shadow:0_4px_4px_#00000030]">
            LARA
          </div>
        </div>
      </ResponsiveStage>
    </section>

    <section className="relative z-0 w-full overflow-hidden bg-[#101729]">
      <div className="w-full sm:hidden">
        <ResponsiveStage
          width={390}
          height={844}
          className="w-full"
          contentClassName="overflow-hidden bg-[#101729]"
        >
          <ProjectSlider />
        </ResponsiveStage>
      </div>

      <div className="hidden w-full sm:block">
        <ResponsiveStage
          width={1920}
          height={900}
          className="w-full"
          contentClassName="desktop-project-stage overflow-hidden bg-[#101729]"
        >
          <ProjectSlider />
        </ResponsiveStage>
      </div>
    </section>

    <section className="w-full bg-[#e4e4e4]">
      <CertificatesCarousel setExpandedImage={setExpandedImage} />
    </section>
  </main>
);
