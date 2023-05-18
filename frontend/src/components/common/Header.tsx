import styled from "styled-components";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import LogoPic from "@/assets/logo/logo.png";

export default function Header({ type }: { type: String }) {
  const navigate = useNavigate();

  return (
    <Container type={type}>
      <Logo alt="logo" src={LogoPic} onClick={() => navigate("/")} />
      <GuideBtn type={type} onClick={() => navigate("/install")}>
        Install Guide
      </GuideBtn>
    </Container>
  );
}

const Container = styled.div<{ type: String }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 0 1.5rem;
  background-color: ${(props) =>
    props.type == "intro" ? theme.colors.container : theme.colors.primary};
  .nav-container {
    display: flex;
  }
`;

const GuideBtn = styled.div<{ type: String }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: ${theme.colors.secondary};
  border: 0.2rem solid ${theme.colors.secondary};
  border-radius: 2rem;
  padding: 0.7rem 1.8rem;
  font-size: 1.8rem;
  font-weight: ${theme.fontWeight.extrabold};

  visibility: ${(props) => (props.type == "intro" ? "" : "hidden")};
  :hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
    background: ${theme.colors.secondary};
    /* border-color: ${theme.colors.secondary}; */
    color: ${theme.colors.white};
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 15rem;
  :hover {
    cursor: pointer;
  }
`;
