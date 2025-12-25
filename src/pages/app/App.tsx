import './App.css'
import Title from "../../comp/text/Title.tsx";
import ButtonContainer from "../../comp/button/ButtonContainer.tsx";
import Button from "../../comp/button/Button.tsx";
import TitleSub from "../../comp/text/TitleSub.tsx";
import TopBar from "../../comp/topbar/TopBar.tsx";
import TopBarContents from "../../comp/topbar/TopBarContents.tsx";

function App() {

  return (
      <>
        <TopBar>
            <TopBarContents.link link="https://github.com/ppisod/doyouwipe" content="Github"/>
            <TopBarContents.link link="/abt" content="About"/>
        </TopBar>
          <hr/>
          <Title/>
          <hr/>
          <TitleSub content="Day 1: Do you wipe?"/>
          <ButtonContainer>
              <Button col={1} content="yes"/>
              <Button col={0} content="no"/>
          </ButtonContainer>
      </>
  )
}

export default App
