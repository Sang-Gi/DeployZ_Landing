import styled from "styled-components";
import Header from "@components/common/Header";
import Installguide from "@components/InstallGuide/Installguide";

export default function InstallGuidePage() {
  return (
    <>
      <Header type="standard" />
      <Container>
        <Installguide />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
