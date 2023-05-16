import { theme } from "@/styles/theme";
import { useState } from "react";
import styled from "styled-components";
import CheckList from "@components/InstallGuide/CheckList";
import React from "react";
import DockerInstall from "./DockerInstall";
import DeployzInstall from "./DeployzInstall";

export default function Installguide() {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "Tab1", content: CheckList },
    { name: "Tab2", content: DockerInstall },
    { name: "Tab3", content: DeployzInstall },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
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
