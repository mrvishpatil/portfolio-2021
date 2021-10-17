import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Logo = styled.a`
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  color: #232323;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
`;

const NavbarButtons = styled.a`
  padding: 8px 0;
  margin: 0 16px;
  font-family: Caudex;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #23232350;
  cursor: pointer;
  :hover {
    color: #232323;
  }
`;

const ActiveNavbarButtons = styled.a`
  padding: 8px 0;
  margin: 0 16px;
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #232323;
  border-bottom: 2px solid #232323;
`;

export default function Navbar({ tab }) {
  return (
    <div className={styles.navbarcontainer}>
      <Logo href="/">Vishwajeet.</Logo>
      {tab == 0 ? (
        <ButtonsContainer>
          <ActiveNavbarButtons href="/">Work</ActiveNavbarButtons>
          <NavbarButtons href="/about">About</NavbarButtons>
          <NavbarButtons href="#contact">Contact</NavbarButtons>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <NavbarButtons href="/">Work</NavbarButtons>
          <ActiveNavbarButtons href="/about">About</ActiveNavbarButtons>
          <NavbarButtons href="#contact">Contact</NavbarButtons>
        </ButtonsContainer>
      )}
    </div>
  );
}
