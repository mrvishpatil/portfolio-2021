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

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: flex-start;
  justify-content: space-between;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const GridRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const TestimonialContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProfileName = styled.span`
  font-family: Caudex;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 140%;
  color: #232323;
`;

const Designation = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.02em;
  color: rgba(35, 35, 35, 0.5);
`;

const TestimonialDescription = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #232323;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  width: 48px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export default function Testimonial() {
  return (
    <div className={styles.testimonialcontainer}>
      <HeadingContainer>
        <Heading>Words of appreciation</Heading>
        <ImageContainer>
          <img style={{ width: "100%" }} src="quote.svg" alt="quote" />
        </ImageContainer>
      </HeadingContainer>
      <GridRowContainer>
        <ColumnContainer>
          <TestimonialContainer>
            <FlexRowContainer>
              <FlexRowContainer
                style={{ justifyContent: "flex-start", gap: "16px" }}
              >
                <ProfilePictureContainer>
                  <img
                    style={{ width: "100%" }}
                    src="/pictures/Piyush.png"
                    alt="Piyush"
                  />
                </ProfilePictureContainer>
                <div>
                  <ProfileName>Piyush Dongre</ProfileName>
                  <Designation>Software Developer at Mobiux</Designation>
                </div>
              </FlexRowContainer>
              <div>
                <a
                  href="https://www.linkedin.com/in/piyush-dongre-642700127/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ width: "24px" }}
                    src="linkedinicon.svg"
                    alt="quote"
                  />
                </a>
              </div>
            </FlexRowContainer>
            <TestimonialDescription>
              “ I am an app developer and often clients expect me to build UI
              designs which look good because I make the apps without realising
              that it&#39;s not that easy. This is where Vishwajeet came in to
              the picture. I hired him for a complete app UI design and he
              delivered and great job just under 10 days and at a reasonable
              price. I recommend his work and his expertise to anyone looking
              for a freelance UI designer. ”
            </TestimonialDescription>
          </TestimonialContainer>
          <TestimonialContainer>
            <FlexRowContainer>
              <FlexRowContainer
                style={{ justifyContent: "flex-start", gap: "16px" }}
              >
                <ProfilePictureContainer>
                  <img
                    style={{ width: "100%" }}
                    src="/pictures/Chirag.png"
                    alt="Chirag"
                  />
                </ProfilePictureContainer>
                <div>
                  <ProfileName>Chirag Rathi</ProfileName>
                  <Designation>Freelance Web Developer</Designation>
                </div>
              </FlexRowContainer>
              <div>
                <a
                  href="https://www.linkedin.com/in/chirag-rathi-5b4939143/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ width: "24px" }}
                    src="linkedinicon.svg"
                    alt="quote"
                  />
                </a>
              </div>
            </FlexRowContainer>
            <TestimonialDescription>
              “ I had the opportunity to work with Vishwajeet on a couple of
              freelancing projects where he acted as the Designer for the
              websites. He is extremely hardworking and completes tasks in an
              amazingly time-bound manner. His designs were well appreciated by
              our clients and he is always there to help at any given time. ”
            </TestimonialDescription>
          </TestimonialContainer>
        </ColumnContainer>
        <TestimonialContainer>
          <FlexRowContainer>
            <FlexRowContainer
              style={{ justifyContent: "flex-start", gap: "16px" }}
            >
              <ProfilePictureContainer>
                <img
                  style={{ width: "100%" }}
                  src="/pictures/Saunved.png"
                  alt="saunved"
                />
              </ProfilePictureContainer>
              <div>
                <ProfileName>Saunved Mutalik</ProfileName>
                <Designation>Co-Founder at Reswitch Technologies</Designation>
              </div>
            </FlexRowContainer>
            <div>
              <a
                href="https://www.linkedin.com/in/saunved/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ width: "24px" }}
                  src="linkedinicon.svg"
                  alt="quote"
                />
              </a>
            </div>
          </FlexRowContainer>
          <TestimonialDescription>
            “ I had a wonderful time working with Vishwajeet. He brings his own
            ideas to the table and executes them in a unique way. His designs
            are well organized and since he understands how they are going to be
            coded, he ensures that the developer won&#39;t run into unnecessary
            issues. He&#39;s quite patient and flexible and doesn&#39;t hesitate
            to provide alternatives or enhancements to existing designs. I look
            forward to working with him again on future projects. ”
          </TestimonialDescription>
        </TestimonialContainer>
      </GridRowContainer>
    </div>
  );
}
