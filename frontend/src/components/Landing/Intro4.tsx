import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import Footer from "@components/common/Footer";

export default function Intro4() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/install");
  };

  return (
    <>
      <Container>
        <div className="title-container">
          <Title>
            <span>내 서버(?)에 설치하고</span>
          </Title>
          <Title>
            지금 바로
            <span
              style={{
                fontWeight: `${theme.fontWeight.extrabold}`,
                // color: `${theme.colors.secondary}`,
              }}
            >
              &nbsp;'경험'&nbsp;
            </span>
            해보세요
          </Title>
        </div>
        <Guidebtn onClick={handleClick}>Install Guide</Guidebtn>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;
  width: 100%;
  z-index: 9999;
  background-color: ${theme.colors.primary};
  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  color: ${theme.colors.white};
  font-size: 4rem;
  margin-top: 2rem;
`;

const Guidebtn = styled.a`
  background: none;
  border-radius: 15rem;
  border: 0.3rem solid ${theme.colors.white};
  color: ${theme.colors.white};
  padding: 1rem 5rem;
  font-size: 2.5rem;
  margin: 5rem;
  font-weight: 700;
  text-decoration: none;
  :hover {
    background: ${theme.colors.white};
    border-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    transition: all 0.4s ease-out;
    cursor: pointer;
  }
`;
