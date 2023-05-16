import styled from "styled-components";
import { theme } from "@/styles/theme";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styled as mstyled } from "@mui/material/styles";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { info } from "@components/common/Toast/notify";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function DeployzInstall() {
  return (
    <>
      {/* <Container></Container> */}
      <SInstallGuideNameDiv>
        <STitleDiv>
          <CloudUpload />
          DeployZ 설치
        </STitleDiv>
        <SDescDiv>
          <SDescP>DeployZ를 설치하고 자동배포하기</SDescP>
        </SDescDiv>
      </SInstallGuideNameDiv>
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl stop nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>https://hub.docker.com/</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
      <Contentdiv>
        <CopyToClipboard
          className="Toram"
          text="sudo systemctl stop nginx"
          onCopy={() => info("복사되었습니다.")}
        >
          <ColorContainer>
            <text>https://hub.docker.com/</text>
            <CopyIcon />
          </ColorContainer>
        </CopyToClipboard>
      </Contentdiv>
    </>
  );
}
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
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.semibold};
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
