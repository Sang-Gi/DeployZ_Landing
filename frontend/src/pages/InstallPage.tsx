import styled from "styled-components";
import Header from "@components/common/Header";
import IntroInstall from "@components/InstallGuide/IntroInstall";

export default function InstallPage() {
  return (
    <>
      <Header type="standard" />
      <Container>
        <IntroInstall />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
