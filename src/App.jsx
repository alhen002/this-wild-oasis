import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";
const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type={"vertical"}>
          <Row type={"horizontal"}>
            <Heading as={"h1"}>The Wild Oasis</Heading>
            <div>
              <Heading as={"h2"}>Check in & Out</Heading>
              <Button variant={"primary"} size={"medium"}>
                Check In
              </Button>
              <Button variant={"secondary"} size={"small"}>
                Check Out
              </Button>
            </div>
          </Row>
          <Row type={"vertical"}>
            <Heading as={"h3"}>Form</Heading>
            <form>
              <Input type={"number"} placeholder={"Number of Guests"} />
              <Input type={"number"} placeholder={"Number of Guests"} />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
