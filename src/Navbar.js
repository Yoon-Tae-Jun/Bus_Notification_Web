import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {FaBusAlt} from "react-icons/fa"
import styles from './layout.module.css'

function Header(){
    const refreshPage = ()=>{
        window.location.reload();
      }
    return(
    <Navbar bg="light" expand="lg" cla fixed="top">
    <Container className={styles.container}>
      <Navbar.Brand href="#" onClick={refreshPage}><FaBusAlt color='#a6ce39'/> <span className ={styles.titlesch}>SCH</span><span className={styles.titlebus}>BUS</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link  href="home">실시간 셔틀버스</Nav.Link>
          <Nav.Link href="time">시간표</Nav.Link>
          <NavDropdown title="공지사항" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">준비중</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">준비중</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
    
}

export default Header;