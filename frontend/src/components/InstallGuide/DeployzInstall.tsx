import { theme } from "@/styles/theme";
import styled from "styled-components";

export default function DeployzInstall() {
  return (
    <SWrap>
      <SContainer></SContainer>
    </SWrap>
  );
}

const SWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const SContainer = styled.div`
  width: 95vw;
  height: 85vh;
  background-color: ${theme.colors.white};
  overflow-y: scroll;
`;
