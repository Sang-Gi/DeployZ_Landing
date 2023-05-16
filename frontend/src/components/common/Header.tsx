import styled from "styled-components";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import LogoPic from "@/assets/logo.png";

export default function Header({ type }: { type: String }) {
  const navigate = useNavigate();

  return (
    <Container type={type}>
      <Logo alt="logo" src={LogoPic} onClick={() => navigate("/install")} />
    </Container>
  );
}

const Container = styled.div<{ type: String }>`
  display: flex;
  justify-content: space-between;
  height: 7vh;
  padding: 0 1.5rem;
  background-color: ${(props) =>
    props.type == "intro" ? theme.colors.container : theme.colors.primary};
  .nav-container {
    display: flex;
  }
`;

const Logo = styled.img`
  padding: 0.5rem;
  :hover {
    cursor: pointer;
  }
`;
