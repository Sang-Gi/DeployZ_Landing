import styled from "styled-components";
import { theme } from "@/styles/theme";
import { styled as mstyled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContentCopyIcon from "@mui/icons-material/FileCopyRounded";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { info } from "@components/common/Toast/notify";

export default function DeployzInstall() {
  return (
    <>
      <Container>
        <STitleDiv>
          <CloudUpload />
          DeployZ 설치
        </STitleDiv>
        <SDescDiv>
          <SDescP>
            DeployZ를 &nbsp;
            <span style={{ color: `${theme.colors.error}` }}>설치</span>
            하고&nbsp;
            <span style={{ color: `${theme.colors.error}` }}>실행</span>
            하기
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
          <Dockerhubdiv>
            <DockerTitle>
              1. Docker Hub 에서 도커 이미지 다운로드&nbsp;&nbsp;
            </DockerTitle>
            <Linkdiv
              href="https://hub.docker.com/r/eunjikim8784/deployz"
              target="_blank"
            >
              Docker Hub 주소
            </Linkdiv>
          </Dockerhubdiv>
          <ColorContainer>
            $ &nbsp; docker pull eunjikim8784/deployz
            <CopyToClipboard
              className="Toram"
              text="docker pull eunjikim8784/deployz"
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
          <Title>2. 도커 컨테이너 실행</Title>
          <Ex>
            - 포트 번호는 기본적으로&nbsp;
            <span style={{ fontWeight: `${theme.fontWeight.extrabold}` }}>
              8784
            </span>
            으로 지정합니다. <br />- 원하는 경우 다른 포트 번호로 지정
            가능합니다. (단, 유효한 포트 번호를 입력해주세요.)
          </Ex>
          <ColorContainer>
            $ &nbsp; docker run -v /var/run/docker.sock:/var/run/docker.sock -v
            /usr/bin/docker:/usr/bin/docker -v
            /usr/libexec/docker:/usr/libexec/docker --name deployz -d -p 8784:80
            eunjikim8784/deployz:latest
            <CopyToClipboard
              className="Toram"
              text="docker run -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker -v /usr/libexec/docker:/usr/libexec/docker --name deployz -d -p 8784:80 eunjikim8784/deployz:latest"
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
      </Container>
    </>
  );
}
const DockerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extraBold};
`;
const Linkdiv = styled.a`
  font-weight: ${theme.fontWeight.semibold};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Dockerhubdiv = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
`;
const Ex = styled.div`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.normal};
  margin-bottom: 1rem;
  /* display: flex;
  align-self: start; */
`;
const Title = styled.div`
  display: flex;
  align-self: start;
  font-size: 2rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extraBold};
  margin-bottom: 1rem;
`;

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
const CloudUpload = mstyled(CloudUploadIcon)({
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
  padding-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 75vh;
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
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 2rem;
`;
