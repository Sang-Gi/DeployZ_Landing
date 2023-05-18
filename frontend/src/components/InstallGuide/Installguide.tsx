import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { tabIndexState } from "./tab";
//import css
import { theme } from "@/styles/theme";
import { useState } from "react";
import styled from "styled-components";

//import component
import CheckList from "@components/InstallGuide/CheckList";
import DockerInstall from "./DockerInstall";
import DeployzInstall from "./DeployzInstall";
import UserRegister from "./UserRegister";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
} from "react-icons/bs";

export default function Installguide() {
  const tabIndex = useRecoilValue(tabIndexState);
  const [currentTab, clickTab] = useState(tabIndex);

  const menuArr = [
    { name: "체크 리스트", icon: <BsFill1CircleFill />, content: CheckList },
    {
      name: "Docker 설치",
      icon: <BsFill2CircleFill />,
      content: DockerInstall,
    },
    {
      name: "DeployZ 설치",
      icon: <BsFill3CircleFill />,
      content: DeployzInstall,
    },
    {
      name: "사용자 등록",
      icon: <BsFill4CircleFill />,
      content: UserRegister,
    },
  ];

  useEffect(() => {
    clickTab(tabIndex);
  }, [tabIndex]);

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <>
      <Container>
        <TabMenu>
          {menuArr.map((el, index) => (
            <li
              key={index}
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}
            >
              {el.icon}&ensp;
              {el.name}
            </li>
          ))}
        </TabMenu>
        <Desc>{React.createElement(menuArr[currentTab].content)}</Desc>
      </Container>
    </>
  );
}
const Container = styled.div``;
const TabMenu = styled.ul`
  color: ${theme.colors.white};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -1rem;
  :hover {
    transition: all 0.4s ease-out;
    cursor: pointer;
  }

  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(50% / 3);
    padding: 2.3rem 2rem;
    font-size: 2rem;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }
  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    transform: scale(1.1);
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 80vh;
  background-color: ${theme.colors.white};
  border-radius: 1rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
