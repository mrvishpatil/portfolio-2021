/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
`;

const GridRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 4px 0;
`;

const EmailButton = styled.a`
  background: #ffe8e2;
  width: fit-content;
  padding: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #d70069;
  border-bottom: 2px #d70069 solid;
  margin-top: 16px;
  :hover {
    background: #ffdad2;
  }
`;

const Heading = styled.span`
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  color: #232323;
`;

const Description = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #232323;
`;

export default function Footer() {
  return (
    <div className={styles.footercontainer}>
      <ColumnContainer>
        <Heading>Get in Touch !</Heading>
        <Description>
          Why let this opportunity go knocking? I&#39;m sure we&#39;ll unearth
          something interesting to discuss and learn from each other.
        </Description>
        <EmailButton href="mailto:vishwajitvijaypatil@gmail.com">
          vishwajitvijaypatil@gmail.com
        </EmailButton>
      </ColumnContainer>
      <GridRowContainer>
        <a
          href="https://www.behance.net/vishwajitpatil1"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Social/Behance.svg" alt="Behance" />
        </a>
        <a
          href="https://dribbble.com/vishpatil"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Social/Dribbble.svg" alt="Dribbble" />
        </a>
        <a
          href="https://www.figma.com/@uivish"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Social/Figma.svg" alt="Figma" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishwajeet-patil-55932715a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Social/Linkedin.svg" alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/vishxui/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Social/Instagram.svg" alt="Instagram" />
        </a>
      </GridRowContainer>
    </div>
  );
}
