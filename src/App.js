import MenuTab from "./RealTime/Tab";
import TimeTable from "./TimeTable/Table";
import EmptyPage from "./EmptyPage/EmptyPage";
import BookMark from "./BookMark/Tab";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./Navbar"
import styles from "./App.css"

function App() {
 

  return (
      <BrowserRouter >
     <div className={styles.container}>
      <Header/>
      <Routes>
          <Route path="/" element={<EmptyPage/>} />
          <Route path="/realtime" element={<MenuTab/>} />
          <Route path="/timetable" element={<EmptyPage/>} />
          <Route path="/bookmark" element={<BookMark/>}/>
          <Route path="/notice" element={<EmptyPage/>}/>
        </Routes>
     </div>
     </BrowserRouter>
    );
}

export default App;