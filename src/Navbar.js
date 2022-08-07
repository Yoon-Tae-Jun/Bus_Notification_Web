import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {FaBusAlt} from "react-icons/fa"
import styles from './Navbar.module.css'

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
        <NavDropdown title="셔틀버스" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">빠른 시간 찾기</NavDropdown.Item>
            <NavDropdown.Item href="realtime">실시간 셔틀버스</NavDropdown.Item>
            <NavDropdown.Item href="timetable">셔틀버스 시간표</NavDropdown.Item>
            <NavDropdown.Item href="bookmark">즐겨찾기</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="notice">공지사항</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
    
}

export default Header;