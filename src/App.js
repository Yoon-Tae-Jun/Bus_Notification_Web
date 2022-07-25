import React from "react";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import Menu_Tab from "./Tabs/Tab";

function App() {
  const refreshPage = ()=>{
    window.location.reload();
  }

  return (
    
     <div>
      <Navbar bg="light" expand="lg" cla fixed="top">
        <Container>
          <Navbar.Brand href="#home" onClick={refreshPage}>SCH BUS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link >실시간 셔틀버스</Nav.Link>
              <Nav.Link >시간표</Nav.Link>
              <NavDropdown title="공지사항" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">준비중</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">준비중</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Menu_Tab/>
     </div>
    );
}

export default App;
