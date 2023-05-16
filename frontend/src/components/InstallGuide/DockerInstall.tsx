import styled from "styled-components";
import { theme } from "@/styles/theme";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
} from "react-icons/ri";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styled as mstyled } from "@mui/material/styles";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { info } from "@components/common/Toast/notify";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function DockerInstall() {
  return (
    <>
      <ModalContainer>
        <SInstallGuideNameDiv>
          <STitleDiv>
            <FileDownload />
            Docker 설치
          </STitleDiv>
          <SDescDiv>
            <SDescP>
              apt의 패키기 인덱스를 최신화하고,
              <br />
              apt가 HTTPS를 통해 패키지를 설치할 수 있도록 설정
            </SDescP>
          </SDescDiv>
        </SInstallGuideNameDiv>
        <VerticalTimeline
          lineColor={`${theme.colors.secondary}`}
          layout="1-column"
        >
          {timelineData.map((data, index) => (
            <VerticalTimelineElement
              intersectionObserverProps={{
                root: null,
                rootMargin: "0px",
                threshold: 1.0,
              }}
              key={index}
              iconStyle={{
                background: `${theme.colors.secondary}`,
                color: `${theme.colors.white}`,
              }}
              icon={data.icon}
              contentStyle={{
                borderRadius: "1rem",
                width: "88%",
                padding: "2rem",
              }}
              style={{ margin: "1rem 0" }}
            >
              <NumTitle>{data.title}</NumTitle>
              {data.content}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </ModalContainer>
    </>
  );
}

const FileDownload = mstyled(FileDownloadIcon)({
  fontSize: "6.5rem",
  color: theme.colors.white,
  position: "relative",
  top: "1.8rem",
  paddingRight: "1.5rem",
});

const SDescP = styled.p`
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.normal};
  line-height: 160%;
  color: ${theme.colors.white};
`;

const SDescDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const SInstallGuideNameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -1rem;
`;

const STitleDiv = styled.div`
  font-size: 4.5rem;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.semibold};
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 85%;
  border: none;
  padding: 0 1rem;
  /* box-shadow: 0 2px 4px, 0px 1px 2px inset; */
  border-radius: 4vh;
  /* background: ${theme.colors.container}; */
  color: ${theme.colors.primary};
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
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
const NumTitle = styled.div`
  display: flex;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.extrabold};
  padding-bottom: 0.5rem;
  font-size: 2.2rem;
`;
const Contentdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 0;
`;
const ColorContainer = styled.div`
  background-color: ${theme.colors.lightgray};
  font-weight: ${theme.fontWeight.semibold};
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
`;

const timelineData = [
  {
    icon: <RiNumber1 />,
    title: "1. apt 패키지 인덱스 최신화",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl stop nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>sudo apt-get update</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
  {
    icon: <RiNumber2 />,
    title: "2. apt가 HTTPS를 통해 패키지 설치 가능하도록 설정",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo apt-get update"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>
              sudo apt-get install \ <br />
              ca-certificates \ <br />
              curl \ <br />
              gnupg \ <br />
              lsb-release
            </text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
  {
    icon: <RiNumber3 />,
    title: "3. 도커의 공식 GPG 키 추가",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo letsencrypt certonly --standalone -d"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>sudo mkdir -p /etc/apt/keyrings</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
        <CopyToClipboard
          className="Toram"
          text="cd /etc/letsencrypt/live/"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>
              curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg
              --dearmor -o /etc/apt/keyrings/docker.gpg
            </text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
  {
    icon: <RiNumber4 />,
    title: "4. 레포지토리 셋업",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo su root"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>
              curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg
              --dearmor -o /etc/apt/keyrings/docker.gpg
            </text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
  {
    icon: <RiNumber5 />,
    title: "5.도커 엔진 설치",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl restart nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>sudo apt-get update</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl restart nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>
              sudo apt-get install docker-ce docker-ce-cli containerd.io
              docker-compose-plugin
            </text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
  {
    icon: <RiNumber6 />,
    title: "6. 도커 설치 확인",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl restart nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>sudo docker -v</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
  {
    icon: <RiNumber7 />,
    title: "7. Nginx 설치",
    content: (
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl restart nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>sudo apt-get update</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl restart nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>sudo apt-get install nginx</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    ),
  },
];
