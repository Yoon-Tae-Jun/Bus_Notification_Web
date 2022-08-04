import MenuTab from "./Tabs/Tab";
import TimeTable from "./TimeTable/Table";
import EmptyPage from "./EMPTYPAGE/EmptyPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./Navbar"
import styles from "./App.css"

function App() {
 

  return (
      <BrowserRouter >
     <div className={styles.container}>
      <Header/>
      <Routes>
          <Route path="/home" element={<MenuTab/>} />
          <Route path="/time" element={<EmptyPage/>} />
        </Routes>
     </div>
     </BrowserRouter>
    );
}

export default App;
