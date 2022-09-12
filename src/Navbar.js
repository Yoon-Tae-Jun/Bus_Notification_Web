import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {FaBusAlt} from "react-icons/fa"
import {IoMdRefresh} from "react-icons/io"
import styles from './Navbar.module.css'

function Header(){
    const GoMainPage = ()=>{
      window.location.href = "/" 
    }
    const refreshPage = ()=>{
        window.location.reload();
      }
    return(
    <Navbar bg="light" expand="lg" cla fixed="top">
    <Container className={styles.container}>
      <Navbar.Brand href="#" onClick={GoMainPage}><FaBusAlt color='#a6ce39'/> <span className ={styles.titlesch}>SCH</span><span className={styles.titlebus}>BUS</span></Navbar.Brand>
      <div className={styles.pd}>sch bus info</div>
      <div onClick={refreshPage} className={styles.refresh}><IoMdRefresh size="36" color="#707071"/></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">홈</Nav.Link>
        <NavDropdown title="셔틀버스" id="basic-nav-dropdown">
            <NavDropdown.Item href="realtime">실시간 셔틀버스</NavDropdown.Item>
            <NavDropdown.Item href="timetable">셔틀버스 시간표</NavDropdown.Item>
            <NavDropdown.Item href="bookmark">즐겨찾기</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="공지사항" id="basic-nav-dropdown">
            <NavDropdown.Item href="notice">공지사항</NavDropdown.Item>
            <NavDropdown.Item href="https://open.kakao.com/o/s632eyye">문의사항</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
    
}

export default Header;