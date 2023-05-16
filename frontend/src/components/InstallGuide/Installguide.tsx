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

export default function Installguide() {
  const tabIndex = useRecoilValue(tabIndexState);
  const [currentTab, clickTab] = useState(tabIndex);

  const menuArr = [
    { name: "Tab1", content: CheckList },
    { name: "Tab2", content: DockerInstall },
    { name: "Tab3", content: DeployzInstall },
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
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}
            >
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

  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    width: calc(50% / 3);
    padding: 3rem;
    font-size: 2rem;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }
  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 70vh;
  background-color: ${theme.colors.white};
  border-radius: 1rem;
`;
