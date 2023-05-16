import styled from "styled-components";
import { theme } from "@/styles/theme";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
import { styled as mstyled } from "@mui/material/styles";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebookRounded";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
export default function CheckList() {
  return (
    <>
      <Container>
        <STitleDiv>
          <LaptopIcon />
          체크 리스트
        </STitleDiv>
        <SDescDiv>
          <SDescP>
            1. AWS EC2 서버 및 도메인
            <br /> 2. SSH 접속 환경(.pem 키)
          </SDescP>
        </SDescDiv>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #aaa",
            lineHeight: "0.1em",
            margin: "10px 0 20px",
          }}
        />
        <Bottomdiv>
          <OneIcon />
          <LeftContainer>
            <Title>AWS EC2</Title>
            <Contentdiv>
              EC2 서버
              <br />
              EC2 도메인
            </Contentdiv>
          </LeftContainer>
          <TwoIcon />
          <LeftContainer>
            <Title>SSL 접속 환경</Title>

            <Contentdiv>.pem 키</Contentdiv>
          </LeftContainer>
        </Bottomdiv>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #aaa",
            lineHeight: "0.1em",
            margin: "2rem 0",
          }}
        />
      </Container>
    </>
  );
}

const OneIcon = mstyled(LooksOneRoundedIcon)({
  fontSize: "6rem",
  color: theme.colors.secondary,
  paddingRight: "1.5rem",
});
const TwoIcon = mstyled(LooksTwoRoundedIcon)({
  fontSize: "6rem",
  color: theme.colors.secondary,
  paddingRight: "1.5rem",
});

const LaptopIcon = mstyled(LaptopChromebookIcon)({
  fontSize: "6.5rem",
  color: theme.colors.primary,
  position: "relative",
  top: "1.8rem",
  paddingRight: "1.5rem",
});

const SDescP = styled.p`
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.normal};
  line-height: 160%;
  color: ${theme.colors.primary};
`;

const SDescDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding-bottom: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

const STitleDiv = styled.div`
  font-size: 3.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extrabold};
  letter-spacing: 0.5rem;
`;

const Bottomdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
const LeftContainer = styled.div`
  padding-right: 5rem;
`;
const Title = styled.div`
  display: flex;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extrabold};
  padding-bottom: 1rem;
  font-size: 2.2rem;
`;
const Contentdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.normal};
`;
