import './App.css'
import Title from "./comp/Title.tsx";
import ButtonContainer from "./comp/ButtonContainer.tsx";
import Button from "./comp/Button.tsx";

function App() {

  return (
      <>
          <Title/>
          <ButtonContainer>
              <Button col={1} content="yes"/>
              <Button col={-1} content="no"/>
          </ButtonContainer>
      </>
  )
}

export default App
