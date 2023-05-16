import styled from "styled-components";
import { theme } from "@/styles/theme";
import { styled as mstyled } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/FileCopyRounded";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { info } from "@components/common/Toast/notify";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function DockerInstall() {
  return (
    <>
      <Container>
        <STitleDiv>
          <FileDownload />
          Docker 설치
        </STitleDiv>
        <SDescDiv>
          <SDescP>
            <span style={{ color: `${theme.colors.error}` }}>apt의</span> 패키기
            인덱스를 최신화하고,
            <br />
            <span style={{ color: `${theme.colors.error}` }}>
              apt가 HTTPS를 통해 패키지를 설치
            </span>
            할 수 있도록 설정
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
          <CopyToClipboard
            className="Toram"
            text="sudo apt-get update"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo apt-get update
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
          <CopyToClipboard
            className="Toram"
            text="sudo apt-get install \
ca-certificates \
curl \
gnupg \
lsb-release"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo apt-get install \ <br />
              &emsp;ca-certificates \ <br />
              &emsp;curl \ <br />
              &emsp;gnupg \ <br />
              &emsp;lsb-release
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
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
          <Title>| 도커의 공식 GPG Key 추가</Title>
          <CopyToClipboard
            className="Toram"
            text="sudo mkdir -p /etc/apt/keyrings"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo mkdir -p /etc/apt/keyrings
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
          <CopyToClipboard
            className="Toram"
            text="curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo
              gpg --dearmor -o /etc/apt/keyrings/docker.gpg
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
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
          <Title>| 레포지토리 셋업</Title>
          <CopyToClipboard
            className="Toram"
            text='echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null'
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ echo \ <br />
              "deb [arch=$(dpkg --print-architecture)
              signed-by=/etc/apt/keyrings/docker.gpg]
              https://download.docker.com/linux/ubuntu \ $(lsb_release -cs)
              stable" | sudo tee /etc/apt/sources.list.d/docker.list {">"}{" "}
              /dev/null
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
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
          <Title>| 도커 엔진 설치</Title>
          <CopyToClipboard
            className="Toram"
            text="sudo apt-get update"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo apt-get update
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
          <CopyToClipboard
            className="Toram"
            text="sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo apt-get install docker-ce docker-ce-cli containerd.io
              docker-compose-plugin
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
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
          <Title>| 도커 설치 확인</Title>
          <CopyToClipboard
            className="Toram"
            text="sudo docker -v"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo docker -v
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
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
          <Title>| Nginx 설치</Title>
          <CopyToClipboard
            className="Toram"
            text="sudo apt-get update"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo apt-get update
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
          <CopyToClipboard
            className="Toram"
            text="sudo apt-get install nginx"
            onCopy={() => info("복사되었습니다.")}
          >
            <ColorContainer>
              $ sudo apt-get install nginx
              <CopyIcon />
            </ColorContainer>
          </CopyToClipboard>
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
const Title = styled.div`
  font-size: 2rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extraBold};
  margin-bottom: 1rem;
`;
const FileDownload = mstyled(FileDownloadIcon)({
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
  margin-top: 125rem;
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
