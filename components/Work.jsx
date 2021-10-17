/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Heading = styled.span`
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  color: #232323;
  align-text: left;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 48px;
  grid-column-gap: 32px;
  align-items: flex-start;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
`;

const ProjectHeading = styled.div`
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #232323;
  margin-top: 16px;
`;

const ProjectDescription = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  color: #232323;
  margin-top: 4px;
`;

const ProjectButton = styled.a`
  background: #ffe8e2;
  padding: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #d70069;
  margin-top: 16px;
  border-bottom: 2px #d70069 solid;

  :hover {
    background: #ffdad2;
  }
`;

const projectlist = [
  {
    url: "https://www.behance.net/gallery/119862845/Google-Material-You-UI-Control-Center",
    title: "Google : Material You UI - Control Center",
    desc: "I have tried to replicate the New Control Center.",
    img: "Projects/project1.png",
  },
  {
    url: "https://www.behance.net/gallery/120063407/LottieFiles-Animations-Figma",
    title: "LottieFiles Animations : Figma",
    desc: "Super simple and beautiful animations in your designs!",
    img: "Projects/project01.png",
  },
  {
    url: "https://www.behance.net/gallery/108601297/Apple-MacBook-Air-Web-Design-Glass-Morphism-Concept",
    title: "Google : Material You UI - Control Center",
    desc: "Tried the Glass Morphism for the first time and it turned out to be good!",
    img: "Projects/project02.png",
  },
  {
    url: "https://www.behance.net/gallery/108684785/Games-App-UI-Concept-Cyberpunk-2077",
    title: "Games App UI Concept : Cyberpunk 2077",
    desc: "Created an App UI Concept for Games Application which has a screen which displays the Game Details.",
    img: "Projects/project03.png",
  },
];

const designlist = [
  {
    url: "https://www.behance.net/gallery/115415953/Fredo-Hero-Section",
    title: "Landing Page UI Design",
    desc: "Designed a landing page for a Saas Application",
    img: "Projects/project04.png",
  },
  {
    url: "https://www.behance.net/gallery/120039763/Reswitch-Tech-Website-Redesign",
    title: "Reswitch Tech : Website Redesign",
    desc: "Designed this super minimalist and super clean Landing Pages.",
    img: "Projects/project05.png",
  },
  {
    url: "https://www.behance.net/gallery/129331083/iOS-15-Control-Center-UI-Kit",
    title: "iOS 15 : Control Center UI Kit",
    desc: "Designed the iOS 15 Control center in Figma using Auto Layout!",
    img: "Projects/project06.png",
  },
];

export default function Work() {
  return (
    <div className={styles.workcontainer}>
      <ColumnContainer>
        <Heading>Projects.</Heading>
        <RowContainer>
          {projectlist.map((item, index) => (
            <ProjectContainer key={index}>
              <ImageContainer>
                <a
                  style={{ width: "100%" }}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ width: "100%", borderRadius: "8px" }}
                    src={item.img}
                    alt="img"
                  />
                </a>
              </ImageContainer>
              <ProjectHeading>{item.title}</ProjectHeading>
              <ProjectDescription>{item.desc}</ProjectDescription>
              <ProjectButton href={item.url} target="_blank">
                Check on Behance →
              </ProjectButton>
            </ProjectContainer>
          ))}
        </RowContainer>
      </ColumnContainer>
      <ColumnContainer>
        <Heading>Designs.</Heading>
        <RowContainer>
          {designlist.map((item, index) => (
            <ProjectContainer key={index}>
              <ImageContainer>
                <a
                  style={{ width: "100%" }}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ width: "100%", borderRadius: "8px" }}
                    src={item.img}
                    alt="img"
                  />
                </a>
              </ImageContainer>
              <ProjectHeading>{item.title}</ProjectHeading>
              <ProjectDescription>{item.desc}</ProjectDescription>
              <ProjectButton href={item.url} target="_blank">
                Check on Behance →
              </ProjectButton>
            </ProjectContainer>
          ))}
        </RowContainer>
      </ColumnContainer>
    </div>
  );
}
