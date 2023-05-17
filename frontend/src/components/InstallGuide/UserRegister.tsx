import styled from "styled-components";
import { theme } from "@/styles/theme";
import { styled as mstyled } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/FileCopyRounded";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { info } from "@components/common/Toast/notify";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import guide1 from "@/assets/guide/userguide1.png";
import guide2 from "@/assets/guide/userguide2.png";

export default function UserRegister() {
  return (
    <>
      <Container>
        <STitleDiv>
          <PersonIcon />
          사용자 등록
        </STitleDiv>
        <SDescDiv>
          <SDescP>
            Deployz를 설치하면서&nbsp;
            <span style={{ color: `${theme.colors.error}` }}>
              발급 된 AuthKey키를 인증
            </span>
            해야&nbsp;
            <span style={{ color: `${theme.colors.error}` }}>사용자 등록</span>
            이 가능합니다.
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
          <Title>1. deployz 컨테이너 접속</Title>
          <ColorContainer>
            $ docker exec -it deployz /bin/bash
            <CopyToClipboard
              className="Toram"
              text="docker exec -it deployz /bin/bash"
              onCopy={() => info("복사되었습니다.")}
            >
              <CopyIcon />
            </CopyToClipboard>
          </ColorContainer>
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
        <Bottomdiv>
          <Title>2. 발급된 AuthKey 확인</Title>
          <ColorContainer>
            $ cat AuthKey
            <CopyToClipboard
              className="Toram"
              text="cat AuthKey"
              onCopy={() => info("복사되었습니다.")}
            >
              <CopyIcon />
            </CopyToClipboard>
          </ColorContainer>
          <Ex>* 인증키 예시 [ 71ab0683c37243649d2712aad62fd654MTUwNzQ0Cg ]</Ex>
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
        <Bottomdiv>
          <Title>3. 사용자 등록 페이지에서 입력 후 인증키 확인</Title>
          <Imgdiv>
            <Guide alt="guide1" src={guide1} />
            <Guide alt="guide2" src={guide2} />
          </Imgdiv>
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
const Imgdiv = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-left: -5rem;
  justify-content: space-evenly;
`;
const Guide = styled.img`
  height: 40vh;
  margin-right: 1rem;
`;
const Ex = styled.div`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.normal};
  margin-top: 1rem;
`;
const Title = styled.div`
  font-size: 2rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extraBold};
  margin-bottom: 1rem;
`;
const PersonIcon = mstyled(PersonAddIcon)({
  fontSize: "6.5rem",
  color: theme.colors.primary,
  position: "relative",
  top: "1.8rem",
  paddingRight: "1.5rem",
});
const CopyIcon = mstyled(ContentCopyIcon)({
  marginLeft: "1rem",
  color: `${theme.colors.primary}`,
  "&:hover": {
    color: `${theme.colors.secondary}`,
    transition: "all .2s ease-out",
    transform: "scale(1.3)",
    cursor: "pointer",
  },
});
const ColorContainer = styled.div`
  background-color: ${theme.colors.lightgray};
  font-weight: ${theme.fontWeight.semibold};
  font-size: 1.5rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin: 1rem 0;
  width: 100%;
  box-shadow: 0 0.3rem 0.5rem ${theme.colors.darkgray};
  display: flex;
  justify-content: space-between;
`;

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
  padding-bottom: 2rem;
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
`;

const Bottomdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 2rem;
  width: 60%;
`;
