/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const CopyrightText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;

  color: rgba(35, 35, 35, 0.4);
`;

export default function Copyright() {
  return (
    <div className={styles.copyrightcontainer}>
      <CopyrightText>©2021–2020 Vishwajeet Patil | Version 1.0</CopyrightText>
    </div>
  );
}
