/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.span`
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  color: #232323;
`;

const Intro = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
  color: #232323;
  margin-top: 16px;
`;

const CTAButton = styled.a`
  background: #ffe8e2;
  padding: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #d70069;
  margin-top: 40px;
  border-bottom: 2px #d70069 solid;

  :hover {
    background: #ffdad2;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export default function Hero({ tab }) {
  return (
    <div className={styles.herocontainer}>
      <TextContainer>
        <Header>Hello, I’m Vishwajeet.</Header>
        <Intro>
          A Product Designer and FE Developer with particular interest in visual
          design and creating design systems. <br /> <br /> I&#39;m currently
          working full time at GigIndia.
        </Intro>
        <CTAButton>Contact →</CTAButton>
      </TextContainer>
      <ImgContainer>
        <img
          style={{ width: "75%", zIndex: "1" }}
          src="heroimage.png"
          alt="heroimage"
        />
      </ImgContainer>
      <img
        style={{ width: "55%", position: "absolute", right: 0, zIndex: "0" }}
        src="herogradient.png"
        alt="heroimage"
      />
    </div>
  );
}
