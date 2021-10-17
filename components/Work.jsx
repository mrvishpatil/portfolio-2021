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
    url: "https://gigindiablog.medium.com/these-ai-driven-customer-onboarding-models-will-help-you-to-sustain-your-customers-for-long-b9c46dc13d16",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
    img: "Projects/project1.png",
  },
  {
    url: "https://gigindiablog.medium.com/these-ai-driven-customer-onboarding-models-will-help-you-to-sustain-your-customers-for-long-b9c46dc13d16",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
    img: "Projects/project01.png",
  },
  {
    url: "https://gigindiablog.medium.com/these-ai-driven-customer-onboarding-models-will-help-you-to-sustain-your-customers-for-long-b9c46dc13d16",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
    img: "Projects/project02.png",
  },
  {
    url: "https://gigindiablog.medium.com/these-ai-driven-customer-onboarding-models-will-help-you-to-sustain-your-customers-for-long-b9c46dc13d16",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
    img: "Projects/project03.png",
  },
];

const designlist = [
  {
    url: "https://gigindiablog.medium.com/these-ai-driven-customer-onboarding-models-will-help-you-to-sustain-your-customers-for-long-b9c46dc13d16",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
    img: "Projects/project04.png",
  },
  {
    url: "https://gigindiablog.medium.com/these-ai-driven-customer-onboarding-models-will-help-you-to-sustain-your-customers-for-long-b9c46dc13d16",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
    img: "Projects/project05.png",
  },
  {
    url: "https://www.behance.net/gallery/129331083/iOS-15-Control-Center-UI-Kit",
    title: "Google : Material You UI - Control Center",
    desc: "Increase your customer lifetime value by 30% with proactive customer onboarding models.",
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
